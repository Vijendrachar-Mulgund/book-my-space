import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductSaveService {

  constructor(private afs: AngularFirestore) { }

  saveListing(theDetails) {
    this.afs.collection('listings').add(theDetails);
  }

  getAllListings() {
    return this.afs.collection('listings').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const dataAll = a.payload.doc.data();
          const idAll = a.payload.doc.id;
          return { idAll, dataAll };
        })
      })
    )
  }

  getOneProduct(productId) {
    return this.afs.collection('/listings').doc(productId).snapshotChanges();
  }

  updateProduct(productId, product) {
    return this.afs.collection('/listings').doc(productId).update(product);
  }

  deleteProduct(productId) {
    return this.afs.collection('/listings').doc(productId).delete();
  }
}
