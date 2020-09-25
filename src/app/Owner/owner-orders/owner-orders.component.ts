import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-owner-orders',
  templateUrl: './owner-orders.component.html',
  styleUrls: ['./owner-orders.component.css']
})
export class OwnerOrdersComponent implements OnInit {

  result$;
  res;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.result$ = this.orderService.getorders();
  }

}
