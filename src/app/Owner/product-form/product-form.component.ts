import { AuthService } from './../../services/auth.service';
import { take, tap, map, finalize } from 'rxjs/operators';
import { ProductSaveService } from './../../services/product-save.service';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  task: AngularFireUploadTask;
  snapshot;
  imageUrl;
  theDownloadUrlRef;

  categories$: Observable<any>;
  theSubscription: Subscription;

  listItem;
  id;

  theOwnerId: string;

  constructor(
    categoryService: CategoryService,
    private saveProduct: ProductSaveService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private storage: AngularFireStorage) {


    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    this.listItem = {};
    if (this.id) {
      this.saveProduct.getOneProduct(this.id)
        .pipe(take(1)).subscribe(
          p => {
            this.listItem = p.payload.data();
          });
    }
  }



  ngOnInit() {
    this.theSubscription = this.authService.user$.subscribe(user => this.theOwnerId = user.uid);
  }

  ngOnDestroy() {
    this.theSubscription.unsubscribe();
  }

  save(newWarehouseDetails) {
    if (this.id) {
      let okStatus = confirm('Update Changes?');
      if (okStatus) {
        this.saveProduct.updateProduct(this.id, this.listItem);
      }
    } else {
      let goAhead = confirm('Go Ahead with the given details?');
      if (goAhead) {
        this.saveProduct.saveListing(newWarehouseDetails);
      }
    }
    this.router.navigate(['owner/listings']);
  }

  deleteItem() {
    if (confirm('Are you sure that you want to delete this form?')) {
      this.saveProduct.deleteProduct(this.id);
      this.router.navigate(['owner/listings']);
    }
  }

  fileUpload(event) {
    const file = event.target.files[0];
    console.log(file);

    if (file.type.split('/')[0] !== 'image') {
      console.log('Not an image');
      return;
    }

    const path = `upload${new Date().getTime()}_${file.name}`;
    console.log(path);

    this.task = this.storage.upload(path, file);
    this.snapshot = this.task.then(a => {
      if (a.bytesTransferred === a.totalBytes) {
        this.theDownloadUrlRef = a.ref.getDownloadURL().then(i => this.imageUrl = i);
        //console.log(this.theDownloadUrlRef);
      }
    });

  }
}
