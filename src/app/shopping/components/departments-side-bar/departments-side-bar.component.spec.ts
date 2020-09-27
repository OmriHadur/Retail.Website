import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsSideBarComponent } from './departments-side-bar.component';

describe('CategoriesSideBarComponent', () => {
  let component: DepartmentsSideBarComponent;
  let fixture: ComponentFixture<DepartmentsSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
