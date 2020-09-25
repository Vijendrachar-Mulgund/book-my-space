import { BookingCartService } from './../services/booking-cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('list') list;
  @Input('showActions') showActions = true;
  @Input('bookingCart') bookingCart;

  nos;

  constructor(private cartService: BookingCartService) { }

  addToBook() {
    this.cartService.addToBook(this.list);
  }

  removeFromBook() {
    this.cartService.removeFromBook(this.list);
  }


  getQuantity() {
    if (!this.bookingCart) return 0;
    let itemNos = this.bookingCart.map(a => {
      return a.data.nos;
    });

    let itemIds = this.bookingCart.map(a => {
      return a.id;
    })

    for (let i = 0; i < itemIds.length; i++) {
      if (itemIds[i] === this.list.idAll) {
        return itemNos[i];
      }
    }
  }

  ngOnInit(): void {
  }

}
