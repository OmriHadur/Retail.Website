import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UnauthorizedError } from "src/app/core/models/unauthorized-error";
import { LoginService } from "src/app/shared/services/login-service";
import { LoginCreateResource } from "src/app/resources/user/login.create.resource";
import { LoginResource } from "src/app/resources/user/login.resource";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  createLoginResource: LoginCreateResource = new LoginCreateResource();
  unauthorizedError: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async login() {
    this.unauthorizedError = false;
    try {
      await this.loginService.create(this.createLoginResource);
      let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
      this.router.navigateByUrl(returnUrl);
    } catch (err) {
      if (err instanceof UnauthorizedError) this.unauthorizedError = true;
    }
  }

  register() {
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
    this.router.navigate(["./register"], {
      queryParams: { returnUrl: returnUrl },
    });
  }
}
