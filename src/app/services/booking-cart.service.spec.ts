import { TestBed } from '@angular/core/testing';

import { BookingCartService } from './booking-cart.service';

describe('BookingCartService', () => {
  let service: BookingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
