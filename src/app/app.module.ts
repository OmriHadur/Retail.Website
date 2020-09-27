import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";

import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpErrorInterceptor } from "./core/interceptors/HttpErrorInterceptor";
import { MembershipModule } from "./membership/membership.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { CommonModule } from "@angular/common";
import { ShoppingModule } from "./shopping/shopping.module";
import { AdminModule } from "./admin/admin.module";
import { OrderModule } from "./order/order.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AdminModule,
    OrderModule,
    SharedModule,
    CoreModule,
    MembershipModule,
    ShoppingModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
