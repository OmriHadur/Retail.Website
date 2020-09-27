import { Component, OnInit, Input, Output } from "@angular/core";
import { DeliveryWindowService } from "src/app/shared/services/delivery.window.service";
import { DeliveryWindowResource } from "src/app/resources/order/delivery.window.resource";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "delivery-windows",
  templateUrl: "./delivery-windows.component.html",
  styleUrls: ["./delivery-windows.component.css"],
})
export class DeliveryWindowsComponent {
  deliveryWindows$: Promise<Map<string, DeliveryWindowResource[]>>;
  @Input()selected: string;
  @Output() selectdChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(deliveryWindowService: DeliveryWindowService) {
    this.deliveryWindows$ = deliveryWindowService.getSorted();
  }

  select(deliveryWindow: DeliveryWindowResource) {
    this.selected = deliveryWindow.id;
    this.selectdChange.emit(this.selected);
  }
}
