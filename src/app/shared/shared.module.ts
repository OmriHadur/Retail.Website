import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PriceDisplayComponent } from "./components/price-display/price-display.component";
import { ProductQuantityComponent } from "./components/product-quantity/product-quantity.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { CoreModule } from "../core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CartItemsComponent } from "./components/cart-items/cart-items.component";
import { ProductComponent } from "./components/product/product.component";
import { RouterModule } from "@angular/router";
import { BsNavbarComponent } from "./components/bs-navbar/bs-navbar.component";
import { AddressService } from "./services/address-service";
import { AdminAuthGuard } from "./services/admin-auth-guard.service";
import { AuthGuard } from "./services/auth-guard.service";
import { CartItemService } from "./services/cart-item-service";
import { CartService } from "./services/cart-service";
import { DepartmentService } from "./services/department-service";
import { LocalStorageService } from "./services/local-storage-service";
import { LoginService } from "./services/login-service";
import { OrderService } from "./services/order-service";
import { ProductService } from "./services/product-service";
import { UserService } from "./services/user-service";
import { OrderItemService } from './services/order-item-service';

@NgModule({
  declarations: [
    PriceDisplayComponent,
    ProductQuantityComponent,
    ProductCardComponent,
    CartItemsComponent,
    ProductComponent,
    BsNavbarComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    BrowserModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: "product/:id",
        component: ProductComponent,
      },
    ]),
  ],
  providers: [
    AddressService,
    AdminAuthGuard,
    AuthGuard,
    CartItemService,
    CartService,
    DepartmentService,
    LocalStorageService,
    LoginService,
    OrderService,
    ProductService,
    UserService,
    OrderItemService,
  ],
  exports: [
    BsNavbarComponent,
    PriceDisplayComponent,
    ProductQuantityComponent,
    ProductCardComponent,
    CartItemsComponent,
  ],
})
export class SharedModule {}
