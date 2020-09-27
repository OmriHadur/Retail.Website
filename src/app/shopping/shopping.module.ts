import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductsComponent } from "./components/products/products.component";
import { ProductFilterComponent } from "./components/product-filter/product-filter.component";
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentsSideBarComponent } from './components/departments-side-bar/departments-side-bar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ProductsComponent,
    ProductFilterComponent,
    DepartmentComponent,
    DepartmentsSideBarComponent,
    HomeComponent
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
      { path: "", component: HomeComponent },
      { path: "products", component: ProductsComponent },
      { path: "departments/:id", component: DepartmentComponent },
      { path: "shopping-cart", component: ShoppingCartComponent }
    ]),
  ],
  exports: [ProductsComponent],
})
export class ShoppingModule {}
