import { take } from 'rxjs/operators';
import { ProductSaveService } from './product-save.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingCartService {


  constructor(private afs: AngularFirestore,
    private list: ProductSaveService) { }

  private createCart() {
    return this.afs.collection('/book-cart').add({
      dateCreated: new Date().getTime(),
    });
  }

  async getBookCart() {
    let listId = await this.getOrCreateBookCartId();
    return this.afs.collection('/book-cart/').doc(listId).collection('/items/');
  }

  private getItem(listId, productId) {
    return this.afs.collection('/book-cart/').doc(listId).collection('/items/').doc(productId);
  }

  private async getOrCreateBookCartId() {
    let listId = localStorage.getItem('listId');
    if (listId) return listId;

    let res = await this.createCart();
    localStorage.setItem('listId', res.id);
    return res.id;

  }

  async addToBook(listing) {
    let listId = await this.getOrCreateBookCartId();
    let items$ = this.getItem(listId, listing.idAll);

    items$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {

      if (!item.payload.exists) {
        items$.set({
          product: listing,
          nos: 1
        });
      } else {
        items$.update({
          nos: item.payload.data().nos + 1,
        });
      }
    });
  }

  async removeFromBook(listing) {
    let listId = await this.getOrCreateBookCartId();
    let items$ = this.getItem(listId, listing.idAll);

    items$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {

      if (item.payload.data().nos == 1) {
        items$.delete();
      }

      if (!item.payload.exists) {
        items$.set({
          product: listing,
          nos: 1
        });
      } else {
        items$.update({
          nos: item.payload.data().nos - 1,
        });
      }
    });
  }

  async clearCart() {
    let listId = await this.getOrCreateBookCartId();
    const qry = await this.afs.collection('book-cart/').doc(listId).collection('/items/').ref.get();
    qry.forEach(doc => {
      doc.ref.delete();
    })

    this.afs.collection('book-cart/').doc(listId).delete();
  };
}

