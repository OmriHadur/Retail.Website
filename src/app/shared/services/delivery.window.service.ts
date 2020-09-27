import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage-service";
import { RestApiService } from "../../core/services/rest-api.service";
import { DeliveryWindowResource } from "src/app/resources/order/delivery.window.resource";
import { DeliveryWindowsComponent } from "src/app/order/components/delivery-windows/delivery-windows.component";
import { DeliveryWindowCreateResource } from 'src/app/resources/order/delivery.window.create.resource';

@Injectable({
  providedIn: "root",
})
export class DeliveryWindowService extends RestApiService<
  DeliveryWindowCreateResource,
  DeliveryWindowResource
> {
  constructor(http: HttpClient, localStorageService: LocalStorageService) {
    super(http, localStorageService, "deliverywindows");
  }

  getSorted(): Promise<Map<string,DeliveryWindowResource[]>> {
    return this.http
      .get<Map<string,DeliveryWindowResource[]>>(this.apiUrl + "sorted", this.httpOptions)
      .toPromise();
  }
}
