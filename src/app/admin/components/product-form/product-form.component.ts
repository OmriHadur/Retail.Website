import { Component, OnInit } from "@angular/core";
import { ProductResource } from "src/app/resources/product.resource";
import { ProductCreateResource } from "src/app/resources/product.create.resource";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/shared/services/product-service";
import { DepartmentService } from "src/app/shared/services/department-service";
import { DepartmentResource } from "src/app/resources/departments.resource";
import { CategoryResource } from "src/app/resources/category.resource";
import { CategoryService } from "src/app/shared/services/category-service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit {
  departments: DepartmentResource[];
  subcategories$: Promise<CategoryResource[]>;
  product: ProductResource;
  productCreate: ProductCreateResource;
  id: string;
  isBusy: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private subCategoryService: CategoryService,
    private departmentService: DepartmentService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  async ngOnInit() {
    this.departments = await this.departmentService.getAll();

    if (this.id) this.product = await this.productService.getById(this.id);
    else {
      this.product = new ProductResource();
    }
    this.onCategoryChange(this.product.categoryName);
  }

  onCategoryChange(categoryName) {
    if (!categoryName) return;
    this.subcategories$ = this.subCategoryService.getAll(
      this.getCategoryId(categoryName)
    );
  }

  getCategoryId(categoryName) {
    return this.departments.find((c) => c.name == categoryName).id;
  }
  async save() {
    this.isBusy = true;
    try {
      this.productCreate = new ProductCreateResource();
      Object.assign(this.productCreate, this.product);
      this.productCreate.categoryId = this.getCategoryId(
        this.product.categoryName
      );

      if (this.id) {
        await this.productService.update(this.id, this.productCreate);
      } else {
        await this.productService.create(this.productCreate);
      }
      this.router.navigateByUrl("admin/products");
    } finally {
      this.isBusy = false;
    }
  }

  async delete() {
    if (!confirm("Are you sure?")) return;
    this.isBusy = true;
    try {
      await this.productService.delete(this.id);
      this.router.navigateByUrl("/admin/products");
    } finally {
      this.isBusy = false;
    }
  }
}
