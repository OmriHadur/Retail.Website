import { ProductCreateResource } from "src/app/resources/product.create.resource";
import { ProductResource } from "src/app/resources/product.resource";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage-service";
import { RestApiService } from "../../core/services/rest-api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends RestApiService<
  ProductCreateResource,
  ProductResource
> {
  constructor(http: HttpClient, localStorageService: LocalStorageService) {
    super(http, localStorageService, "products");
  }

  getByCategory(subCategoryId: string): Promise<ProductResource[]> {
    return this.http
      .get<ProductResource[]>(
        this.apiUrl + "category/" + subCategoryId,
        this.httpOptions
      )
      .toPromise();
  }

  getByProductName(productName: string): Promise<ProductResource[]> {
    return this.http
      .get<ProductResource[]>(
        this.apiUrl + "search/" + productName,
        this.httpOptions
      )
      .toPromise();
  }
}
