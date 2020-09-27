import { HttpClient } from "@angular/common/http";
import { InnerRestApiService } from '../../core/services/inner-rest-api.service';
import { LocalStorageService } from './local-storage-service';
import { Injectable } from '@angular/core';
import { AddressCreateResource } from 'src/app/resources/user/address.create.resource';
import { AddressResource } from 'src/app/resources/user/address.resource';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends InnerRestApiService<
  AddressCreateResource,
  AddressResource
> {
  constructor(http: HttpClient, localStorageService: LocalStorageService) {
    super(http, localStorageService, "users/%s1/addresses/");
  }
}
