import { Component, OnInit } from "@angular/core";
import { ProductResource } from "src/app/resources/product.resource";
import { ProductService } from "src/app/shared/services/product-service";

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"],
})
export class AdminProductsComponent implements OnInit {
  filtedProducts: ProductResource[];
  hovered: ProductResource;

  constructor(private productService: ProductService) {}

  async ngOnInit() {}

  async filter(query) {
    if (!query) this.filtedProducts = [];
    this.filtedProducts = await this.productService.getByProductName(query);
  }

  delete(product: ProductResource) {
    this.productService.delete(product.id);
    var productIndex = this.filtedProducts.indexOf(product);
    this.filtedProducts.splice(productIndex, 1);
  }
}
