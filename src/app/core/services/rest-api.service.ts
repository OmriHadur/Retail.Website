import { HttpClient } from "@angular/common/http";
import { CreateResource } from 'src/app/resources/create.resource';
import { Resource } from 'src/app/resources/resource';
import { httpOptions } from 'src/app/core/models/http-options';
import { LocalStorageService } from '../../shared/services/local-storage-service';
import { LoginResource } from 'src/app/resources/user/login.resource';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestApiService<
  TCreateResource extends CreateResource,
  TResource extends Resource
> {
  httpOptions: httpOptions;
  protected apiUrl: string;

  constructor(
    protected http: HttpClient,
    protected localStorageService: LocalStorageService,
    apiPrefix: string
  ) {
    localStorageService.event.on(localStorageService.onUserChanged, (u) =>
      this.setHeader(u)
    );
    this.setHeader();
    this.apiUrl = environment.APIKeys.apiServerUrl + apiPrefix + "/";
  }

  protected setHeader(user?: LoginResource) {
    this.httpOptions = new httpOptions(this.localStorageService.getToken());
  }

  getAll(): Promise<TResource[]> {
    return this.http
      .get<TResource[]>(this.apiUrl, this.httpOptions)
      .toPromise();
  }

  getById(id: string): Promise<TResource> {
    return this.http
      .get<TResource>(this.apiUrl + id, this.httpOptions)
      .toPromise();
  }

  create(resource: TCreateResource): Promise<TResource> {
    return this.http
      .post<TResource>(this.apiUrl, resource, this.httpOptions)
      .toPromise();
  }

  update(id: any, resource: TCreateResource): Promise<TResource> {
    return this.http
      .put<TResource>(this.apiUrl + id, resource, this.httpOptions)
      .toPromise();
  }

  delete(id: any): Promise<TResource> {
    return this.http
      .delete<TResource>(this.apiUrl + id, this.httpOptions)
      .toPromise();
  }
}
