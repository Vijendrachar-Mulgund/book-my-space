import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOrdersComponent } from './owner-orders.component';

describe('OwnerOrdersComponent', () => {
  let component: OwnerOrdersComponent;
  let fixture: ComponentFixture<OwnerOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
