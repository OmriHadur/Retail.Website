import { Component, OnInit, Input } from "@angular/core";
import { OrderResource } from "src/app/resources/order/order.resource";

@Component({
  selector: "admin-orders",
  templateUrl: "./admin-orders.component.html",
  styleUrls: ["./admin-orders.component.css"],
})
export class AdminOrdersComponent {
  @Input("orders") orders: OrderResource[];
  @Input("showStatus") showStatus: boolean;

  hovering: OrderResource;
}
