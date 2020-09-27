import { Component, OnInit } from "@angular/core";
import { OrderResource } from "src/app/resources/order/order.resource";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from "src/app/shared/services/order-service";
import { UserResource } from "src/app/resources/user/user.resource";
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: "admin-order",
  templateUrl: "./admin-order.component.html",
  styleUrls: ["./admin-order.component.css"],
})
export class AdminOrderComponent implements OnInit {
  order: OrderResource;
  user: UserResource;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    var orderId = this.route.snapshot.paramMap.get("id");
    this.order = await this.orderService.getById(orderId);
    this.user = await this.userService.getById(this.order.customer.id);
  }

  async markAsShipped() {
    await this.orderService.markAsShipped(this.order.id);
    this.router.navigateByUrl("admin/pending");
  }
}
