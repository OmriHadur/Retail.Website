import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LocalStorageService } from './local-storage-service';
import { UserCreateResource } from 'src/app/resources/user/user.create.resource';
import { UserResource } from 'src/app/resources/user/user.resource';
import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/core/services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestApiService<
  UserCreateResource,
  UserResource
> {
  user$: Observable<UserResource>;

  constructor(http: HttpClient, localStorageService: LocalStorageService) {
    super(http, localStorageService, "users");
  }
}
