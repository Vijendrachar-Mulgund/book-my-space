import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';
import { ProductSaveService } from './../../services/product-save.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-owner-listings',
  templateUrl: './owner-listings.component.html',
  styleUrls: ['./owner-listings.component.css']
})
export class OwnerListingsComponent implements OnInit, OnDestroy {
  allLists$;
  ownerId;

  theSubscription: Subscription;

  constructor(private listingsSave: ProductSaveService, private authService: AuthService) {
    this.allLists$ = this.listingsSave.getAllListings();
  }

  ngOnInit() {
    this.theSubscription = this.authService.user$.subscribe(user => this.ownerId = user.uid);
  }

  ngOnDestroy() {
    this.theSubscription.unsubscribe();
  }
}
