import { AuthService } from './../services/auth.service';
import { OrderService } from './../services/order.service';

import { BookingCartService } from './../services/booking-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking-cart',
  templateUrl: './booking-cart.component.html',
  styleUrls: ['./booking-cart.component.css']
})
export class BookingCartComponent implements OnInit, OnDestroy {

  bookingData;
  userId;

  cartSubcription: Subscription;
  authSubscription: Subscription;

  today = new Date();


  constructor(
    private orderService: OrderService,
    private cartService: BookingCartService,
    private authService: AuthService) {

  }

  async ngOnInit() {
    this.cartSubcription = (await this.cartService.getBookCart()).snapshotChanges().subscribe(cart => {
      this.bookingData = cart.map(a => {
        let data = a.payload.doc.data();
        let id = a.payload.doc.id;
        return { data, id }
      });
    });

    this.authSubscription = this.authService.user$.subscribe(user => this.userId = user.uid)

  }

  calcPrice() {
    let price = [];
    let totalPrice = 0;

    if (!this.bookingData) return 0;

    for (let i = 0; i < this.bookingData.length; i++) {
      price.push(this.bookingData[i].data.product.dataAll.rentPerday * this.bookingData[i].data.nos);
    }

    for (let i = 0; i < price.length; i++) {
      totalPrice += price[i];
    }
    return totalPrice;
  }

  clearCart() {
    this.cartService.clearCart();
  }

  placeOrder() {

    let order = {
      datePlaced: this.today.getDate() + ' - ' + (this.today.getMonth() + 1) + ' - ' + this.today.getFullYear(),
      theProduct: this.bookingData,
      theUserId: this.userId,
    }
    if (this.calcPrice() !== 0) {
      let okSignal = confirm('Go ahead with the Order?');
      if (okSignal) {
        this.orderService.storeTheOrder(order);
      }
    } else {
      alert('Your Booking list is empty. Please choose the WareHouse/Storage Space you wish to book.');
    }
  }

  ngOnDestroy() {
    this.cartSubcription.unsubscribe();
    this.authSubscription.unsubscribe();
  }

}
