import { Component } from "@angular/core";
import { OrderResource } from "src/app/resources/order/order.resource";
import { OrderService } from 'src/app/shared/services/order-service';

@Component({
  selector: "admin-all-orders",
  templateUrl: "./admin-all-orders.component.html",
  styleUrls: ["./admin-all-orders.component.css"],
})
export class AdminAllOrdersComponent {
  orders$: Promise<OrderResource[]>;

  constructor(orderService: OrderService) {
    this.orders$ = orderService.getAll();
  }
}
