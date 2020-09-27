import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CoreModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    BrowserModule,
    NgbModule,
    RouterModule.forChild([
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ]),
  ],
})
export class MembershipModule {}
