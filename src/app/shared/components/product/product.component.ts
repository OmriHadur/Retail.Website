import { Component, OnInit } from "@angular/core";
import { ProductResource } from "src/app/resources/product.resource";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from 'src/app/shared/services/product-service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  product: ProductResource;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    var productId = this.route.snapshot.paramMap.get("id");
    this.product = await this.productService.getById(productId);
  }
}
