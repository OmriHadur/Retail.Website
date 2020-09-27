import { Component, Input } from "@angular/core";
import { Price } from 'src/app/resources/cart/price';


@Component({
  selector: "price-display",
  templateUrl: "./price-display.component.html",
  styleUrls: ["./price-display.component.css"],
})
export class PriceDisplayComponent {
  @Input("price") item: Price;

  constructor() {}
}
