import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DepartmentService } from "src/app/shared/services/department-service";
import { DepartmentResource } from "src/app/resources/departments.resource";

@Component({
  selector: "department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"],
})
export class DepartmentComponent implements OnInit {
  department: DepartmentResource;

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) {}

  async ngOnInit() {
    this.route.paramMap.subscribe(async (pm) => {
      var categoryId = pm.get("id");
      this.department = await this.departmentService.getById(categoryId);
    });
  }
}
