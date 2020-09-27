import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LocalStorageService } from './local-storage-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.localStorageService.getUser()) return true;
    this.router.navigate(["./login"], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
