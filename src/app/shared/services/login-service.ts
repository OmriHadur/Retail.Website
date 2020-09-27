import { HttpClient } from "@angular/common/http";
import { LoginCreateResource } from "src/app/resources/user/login.create.resource";
import { LoginResource } from "src/app/resources/user/login.resource";
import { Injectable } from "@angular/core";
import { RestApiService } from "../../core/services/rest-api.service";
import { LocalStorageService } from "./local-storage-service";

@Injectable({
  providedIn: "root",
})
export class LoginService extends RestApiService<
  LoginCreateResource,
  LoginResource
> {
  constructor(http: HttpClient, localStorageService: LocalStorageService) {
    super(http, localStorageService, "logins");
  }

  logout() {
    this.localStorageService.logout();
  }

  async create(resource: LoginCreateResource): Promise<LoginResource> {
    var loginResource = await super.create(resource);
    this.localStorageService.setLogin(loginResource);
    return loginResource;
  }
}
