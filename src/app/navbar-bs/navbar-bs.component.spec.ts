import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBsComponent } from './navbar-bs.component';

describe('NavbarBsComponent', () => {
  let component: NavbarBsComponent;
  let fixture: ComponentFixture<NavbarBsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarBsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
