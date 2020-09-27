import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { LocalStorageService } from "../../shared/services/local-storage-service";
import { Resource } from 'src/app/resources/resource';
import { CreateResource } from 'src/app/resources/create.resource';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class InnerRestApiService<
  TCreateResource extends CreateResource,
  TResource extends Resource
> {
  apiServerUrl:string;
  httpOptions = {
    headers: new HttpHeaders({}),
  };

  constructor(
    private http: HttpClient,
    protected localStorageService: LocalStorageService,
    private apiUrl
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: localStorageService.getToken(),
      }),
    };
    this.apiServerUrl= environment.APIKeys.apiServerUrl;
  }

  getAll(parentId: string): Promise<TResource[]> {
    var baseUrl = this.apiServerUrl + this.parameterizedString(this.apiUrl, parentId);
    return this.http
      .get<TResource[]>(baseUrl, this.httpOptions)
      .toPromise();
  }

  getById(parentId: string, id: string): Promise<TResource> {
    var baseUrl = this.apiServerUrl + this.parameterizedString(this.apiUrl, parentId);
    return this.http.get<TResource>(baseUrl + id, this.httpOptions).toPromise();
  }

  create(parentId: string, resource: TCreateResource): Promise<TResource> {
    var baseUrl = this.apiServerUrl + this.parameterizedString(this.apiUrl, parentId);
    return this.http
      .post<TResource>(baseUrl, resource, this.httpOptions)
      .toPromise();
  }

  update(
    parentId: string,
    id: any,
    resource: TCreateResource
  ): Promise<TResource> {
    var baseUrl = this.apiServerUrl + this.parameterizedString(this.apiUrl, parentId);
    return this.http
      .put<TResource>(baseUrl + id, resource, this.httpOptions)
      .toPromise();
  }

  delete(parentId: string, id: any): Promise<TResource> {
    var baseUrl = this.apiServerUrl + this.parameterizedString(this.apiUrl, parentId);

    return this.http
      .delete<TResource>(baseUrl + id, this.httpOptions)
      .toPromise();
  }

  private parameterizedString(...args) {
    const str = args[0];
    const params = args.filter((arg, index) => index !== 0);
    if (!str) return "";
    return str.replace(/%s[0-9]+/g, (matchedStr) => {
      const variableIndex = matchedStr.replace("%s", "") - 1;
      return params[variableIndex];
    });
  }
}
