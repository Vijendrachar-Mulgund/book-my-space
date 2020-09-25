
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  myCategories;

  constructor(private afs: AngularFirestore) { }

  getCategories() {
    return this.afs.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
    );
  }
}