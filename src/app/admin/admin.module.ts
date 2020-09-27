import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminProductsComponent } from "./components/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./components/admin-orders/admin-orders.component";
import { CoreModule } from "../core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AdminOrderComponent } from "./components/admin-order/admin-order.component";
import { AdminPendingOrdersComponent } from "./components/admin-pending-orders/admin-pending-orders.component";
import { AdminAllOrdersComponent } from "./components/admin-all-orders/admin-all-orders.component";
import { AdminOrderItemsComponent } from "./components/admin-order-items/admin-order-items.component";
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AuthGuard } from '../shared/services/auth-guard.service';
import { AdminAuthGuard } from '../shared/services/admin-auth-guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    AdminOrderComponent,
    AdminPendingOrdersComponent,
    AdminAllOrdersComponent,
    AdminOrderItemsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: "admin/products/new",
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: "admin/products/:id",
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: "admin/products",
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: "admin/order/:id",
        component: AdminOrderComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: "admin/orders",
        component: AdminAllOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: "admin/pending",
        component: AdminPendingOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
    ]),
  ],
  exports: [ProductFormComponent],
})
export class AdminModule {}
