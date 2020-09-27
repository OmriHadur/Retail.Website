import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { GroupByPipe } from "./models/group-by.pipe";
import { OrderByPipe } from "./models/order.by.pipe";

@NgModule({
  declarations: [GroupByPipe, OrderByPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    BrowserModule,
    NgbModule,
    RouterModule.forChild([]),
  ],
  exports: [GroupByPipe, OrderByPipe],
})
export class CoreModule {}
