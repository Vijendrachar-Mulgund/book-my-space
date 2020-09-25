import { TestBed } from '@angular/core/testing';

import { RequestSubmitService } from './request-submit.service';

describe('RequestSubmitService', () => {
  let service: RequestSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
