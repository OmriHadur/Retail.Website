import { Component, OnInit } from "@angular/core";
import { AddressResource } from "src/app/resources/user/address.resource";
import { UserResource } from "src/app/resources/user/user.resource";
import { Router } from "@angular/router";
import { AddressService } from "src/app/shared/services/address-service";
import { LocalStorageService } from "src/app/shared/services/local-storage-service";
import { OrderService } from "src/app/shared/services/order-service";
import { OrderResource } from "src/app/resources/order/order.resource";

@Component({
  selector: "check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"],
})
export class CheckOutComponent implements OnInit {
  address: AddressResource;
  user: UserResource;
  order: OrderResource;
  deliveryWindowId: string;
  busy: boolean;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private orderService: OrderService,
    private addressService: AddressService
  ) {
    this.localStorageService.getUserAndObserve((user) => (this.user = user));
    this.address = new AddressResource();
  }

  async ngOnInit() {
    this.order = this.localStorageService.getOrder();
    if (this.order) {
      this.deliveryWindowId = this.order.deliveryWindow.id;
      this.address = this.order.customer.address;
    } else {
      var addresses = await this.addressService.getAll(this.user.id);
      if (addresses.length > 0) this.address = addresses[0];
    }
  }

  async placeOrder() {
    this.busy = true;
    try {
      var orderResource = await this.createOrUpdateOrder();
      if (orderResource) this.router.navigate(["/order", orderResource.id]);
    } finally {
      this.busy = false;
    }
  }

  private async createOrUpdateOrder(): Promise<OrderResource> {
    if (this.order)
      return await this.orderService.updateOrder(
        this.address,
        this.order.id,
        this.user.id,
        this.deliveryWindowId
      );
    else
      return await this.orderService.createOrder(
        this.address,
        this.user.id,
        this.deliveryWindowId
      );
  }

  selectdChange(deliveryWindowId: string) {
    this.deliveryWindowId = deliveryWindowId;
  }
}
