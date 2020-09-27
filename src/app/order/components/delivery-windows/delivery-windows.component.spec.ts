import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryWindowsComponent } from './delivery-windows.component';

describe('DeliveryWindowsComponent', () => {
  let component: DeliveryWindowsComponent;
  let fixture: ComponentFixture<DeliveryWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryWindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
