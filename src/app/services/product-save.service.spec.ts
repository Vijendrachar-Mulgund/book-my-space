import { TestBed } from '@angular/core/testing';

import { ProductSaveService } from './product-save.service';

describe('ProductSaveService', () => {
  let service: ProductSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
