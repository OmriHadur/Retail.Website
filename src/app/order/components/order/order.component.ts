import { Component, OnInit } from "@angular/core";
import { OrderResource } from "src/app/resources/order/order.resource";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from "src/app/shared/services/order-service";
import { CartService } from "src/app/shared/services/cart-service";

@Component({
  selector: "order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  order: OrderResource;

  constructor(
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  async ngOnInit() {
    var orderId = this.route.snapshot.paramMap.get("id");
    this.order = await this.orderService.getById(orderId);
  }

  async addToCart() {
    await this.cartService.addOrder(this.order.id);
    this.router.navigateByUrl("/shopping-cart");
  }

  async editOrder() {
    await this.orderService.editOrder(this.order.id);
    this.router.navigateByUrl("/shopping-cart");
  }
}
