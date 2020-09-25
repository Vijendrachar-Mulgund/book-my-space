import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRequestFormComponent } from './owner-request-form.component';

describe('OwnerRequestFormComponent', () => {
  let component: OwnerRequestFormComponent;
  let fixture: ComponentFixture<OwnerRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
