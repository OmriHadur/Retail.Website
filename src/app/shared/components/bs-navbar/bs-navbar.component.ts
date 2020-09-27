import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserResource } from "src/app/resources/user/user.resource";
import { CartResource } from "src/app/resources/cart/cart.resource";
import { LocalStorageService } from "src/app/shared/services/local-storage-service";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"],
})
export class BsNavbarComponent {
  user: UserResource;
  cart: CartResource;
  searchValue: String;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    localStorageService.getUserAndObserve((user) => (this.user = user));
    localStorageService.getCartAndObserve((cart) => (this.cart = cart));
  }

  logout() {
    this.user = null;
    this.localStorageService.logout();
    this.router.navigateByUrl("/");
  }

  search() {
    if (this.searchValue)
      this.router.navigate(["./products"], {
        queryParams: { productName: this.searchValue.toLowerCase() },
      });
  }
}
