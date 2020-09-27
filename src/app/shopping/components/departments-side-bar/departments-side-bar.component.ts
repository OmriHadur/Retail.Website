import { Component, Input } from "@angular/core";
import { DepartmentService } from "src/app/shared/services/department-service";
import { DepartmentResource } from 'src/app/resources/departments.resource';

@Component({
  selector: "departments-side-bar",
  templateUrl: "./departments-side-bar.component.html",
  styleUrls: ["./departments-side-bar.component.css"],
})
export class DepartmentsSideBarComponent {
  departments$:Promise<DepartmentResource[]>;
  @Input("selected") selected:string;
  
  constructor(departmentService: DepartmentService) {
    this.departments$ = departmentService.getAll();
  }
}
