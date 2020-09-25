
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { BookingCartService } from './booking-cart.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  theOrders;
  OrdersByUid
  constructor(
    private afs: AngularFirestore,
    private cartService: BookingCartService,
    private router: Router,
    private authService: AuthService) {
  }

  uid = this.authService.user$.subscribe(user => this.uid = user.uid);

  async storeTheOrder(order) {
    let res = await this.afs.collection('/orders').add(order);
    this.cartService.clearCart();
    this.router.navigate(['/check-out/']);
    return res;
  }

  getorders() {
    return this.afs.collection('/orders').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        })
      }))
  }

  getOrdersByUserid(userId: string) {
    return this.OrdersByUid = this.afs.collection('/orders').ref.where(this.uid, '==', userId);
  }
}
