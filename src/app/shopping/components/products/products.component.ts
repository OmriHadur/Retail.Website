import { Component, OnInit } from "@angular/core";
import { ProductResource } from "src/app/resources/product.resource";
import { CartResource } from "src/app/resources/cart/cart.resource";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/shared/services/product-service";
import { LocalStorageService } from "src/app/shared/services/local-storage-service";

@Component({
  selector: "products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  products: ProductResource[];
  cart: CartResource;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.router.queryParamMap.subscribe(async (params) => {
      var category = params.get("category");
      if (category)
        this.products = await this.productService.getByCategory(category);
      var productName = params.get("productName");
      if (productName)
        this.products = await this.productService.getByProductName(productName);
    });
    this.localStorageService.getCartAndObserve((cart) => (this.cart = cart));
  }
}
