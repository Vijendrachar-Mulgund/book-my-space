import { BookingCartService } from './../services/booking-cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'navbar-bs',
  templateUrl: './navbar-bs.component.html',
  styleUrls: ['./navbar-bs.component.css']
})
export class NavbarBsComponent implements OnInit {

  badgecount: number;

  constructor(public auth: AuthService, private cartService: BookingCartService) {

  }

  async ngOnInit() {
    (await this.cartService.getBookCart()).snapshotChanges().subscribe((cart): any => {
      let totalCount = cart.map(a => {
        let data = a.payload.doc.data();
        let id = a.payload.doc.id;
        return { data, id };
      })
      this.badgecount = 0;
      for (let i = 0; i < totalCount.length; i++) {
        this.badgecount += totalCount[i].data.nos;
      }
    });
  }

  logout() {
    this.auth.signOut();
  }
}
