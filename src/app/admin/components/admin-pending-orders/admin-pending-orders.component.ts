import { Component } from '@angular/core';
import { OrderResource } from 'src/app/resources/order/order.resource';
import { OrderService } from 'src/app/shared/services/order-service';

@Component({
  selector: 'admin-pending-orders',
  templateUrl: './admin-pending-orders.component.html',
  styleUrls: ['./admin-pending-orders.component.css']
})
export class AdminPendingOrdersComponent{

  orders$:Promise<OrderResource[]>

  constructor(orderService: OrderService) {
    this.orders$ = orderService.getPendingOrders();
  }
}
