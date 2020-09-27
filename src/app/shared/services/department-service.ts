import { HttpClient } from '@angular/common/http';
import { RestApiService } from '../../core/services/rest-api.service';
import { LocalStorageService } from './local-storage-service';
import { Injectable } from '@angular/core';
import { DepartmentCreateResource } from 'src/app/resources/department.create.resource';
import { DepartmentResource } from 'src/app/resources/departments.resource';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends RestApiService<DepartmentCreateResource,DepartmentResource> {

  constructor(http: HttpClient,localStorageService: LocalStorageService) {
    super(http, localStorageService,"departments");

  }
}
