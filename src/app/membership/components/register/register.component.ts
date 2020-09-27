import { Component } from "@angular/core";
import { UserCreateResource } from "src/app/resources/user/user.create.resource";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/shared/services/user-service";
import { LoginService } from "src/app/shared/services/login-service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  userCreateResource: UserCreateResource;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private loginService: LoginService
  ) {
    this.userCreateResource = new UserCreateResource();
  }

  async register() {
    var user = await this.userService.create(this.userCreateResource);
    if (!user) return;
    await this.loginService.create(this.userCreateResource);
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    if (returnUrl) this.router.navigateByUrl(returnUrl);
    else this.router.navigateByUrl("/");
  }
}
