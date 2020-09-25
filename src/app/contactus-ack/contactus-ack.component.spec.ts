import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusAckComponent } from './contactus-ack.component';

describe('ContactusAckComponent', () => {
  let component: ContactusAckComponent;
  let fixture: ComponentFixture<ContactusAckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusAckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusAckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
