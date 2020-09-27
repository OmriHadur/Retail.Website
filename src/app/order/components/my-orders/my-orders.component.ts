import { Component } from "@angular/core";
import { OrderResource } from "src/app/resources/order/order.resource";
import { OrderService } from "src/app/shared/services/order-service";

@Component({
  selector: "app-my-orders",
  templateUrl: "./my-orders.component.html",
  styleUrls: ["./my-orders.component.css"],
})
export class MyOrdersComponent {
  orders$: Promise<OrderResource[]>;
  hovering: OrderResource;

  constructor(private orderService: OrderService) {
    this.orders$ = this.orderService.getMyOrders();
  }
}
