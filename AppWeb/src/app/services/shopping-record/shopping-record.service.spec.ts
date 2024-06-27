import { TestBed } from '@angular/core/testing';

import { ShoppingRecordService } from './shopping-record.service';

describe('ShoppingRecordService', () => {
  let service: ShoppingRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
