import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage-service';
import { Injectable } from '@angular/core';
import { InnerRestApiService } from 'src/app/core/services/inner-rest-api.service';
import { CategoryCreateResource } from 'src/app/resources/category.create.resource';
import { CategoryResource } from 'src/app/resources/category.resource';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends InnerRestApiService<CategoryCreateResource,CategoryResource> {

  constructor(http: HttpClient, localStorageService: LocalStorageService) {
    super(http, localStorageService, "dapartments/%s1/categories/");
  }
}
