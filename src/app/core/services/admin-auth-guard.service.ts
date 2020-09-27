import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LocalStorageService } from "./local-storage-service";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService) {}

  canActivate() {
    var user = this.localStorageService.getUser();
    if (!user) return false;
    return user.isAdmin;
  }
}
