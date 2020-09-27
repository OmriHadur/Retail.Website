import { NgModule } from "@angular/core";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { OrderComponent } from "./components/order/order.component";
import { CheckOutComponent } from "./components/check-out/check-out.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../shared/services/auth-guard.service";
import { DeliveryWindowsComponent } from './components/delivery-windows/delivery-windows.component';

@NgModule({
  declarations: [
    OrderSuccessComponent,
    MyOrdersComponent,
    OrderComponent,
    CheckOutComponent,
    DeliveryWindowsComponent,
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
    RouterModule.forChild([
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "order-success/:id",
        component: OrderSuccessComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "my-orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "order/:id",
        component: OrderComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class OrderModule {}
