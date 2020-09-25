import { TestBed } from '@angular/core/testing';

import { OwnerAuthGaurdService } from './owner-auth-gaurd.service';

describe('OwnerAuthGaurdService', () => {
  let service: OwnerAuthGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerAuthGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
