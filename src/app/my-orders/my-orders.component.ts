import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  result$;
  res;
  theUid;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.result$ = this.orderService.getorders();
    this.authService.user$.subscribe(user => this.theUid = user.uid);
  }
}
