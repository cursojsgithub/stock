import { TestBed } from '@angular/core/testing';

import { ServicestockService } from './servicestock.service';

describe('ServicestockService', () => {
  let service: ServicestockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicestockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
