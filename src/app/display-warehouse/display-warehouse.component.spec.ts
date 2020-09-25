import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWarehouseComponent } from './display-warehouse.component';

describe('DisplayWarehouseComponent', () => {
  let component: DisplayWarehouseComponent;
  let fixture: ComponentFixture<DisplayWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
