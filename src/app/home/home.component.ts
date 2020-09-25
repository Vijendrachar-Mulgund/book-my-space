import { BookingCartService } from './../services/booking-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductSaveService } from '../services/product-save.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  theListings: any[] = [];
  filteredListings: any[] = [];

  category: string;

  cart: any;

  bookingCart;

  subcription: Subscription;

  constructor(listingService: ProductSaveService,
    private cartService: BookingCartService,
    route: ActivatedRoute) {

    listingService.getAllListings().subscribe(listing => {
      this.theListings = listing;

      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

        this.filteredListings = (this.category) ?
          this.theListings.filter(p => p.dataAll.category === this.category) :
          this.theListings;
      });
    });
  }

  async ngOnInit() {
    this.subcription = (await this.cartService.getBookCart()).snapshotChanges().subscribe(cart => {
      this.cart = cart.map(a => {
        let data = a.payload.doc.data();
        let id = a.payload.doc.id;
        return { data, id }
      });
      //console.log(this.cart);
    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
