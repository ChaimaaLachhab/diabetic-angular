import { TestBed } from '@angular/core/testing';

import { DiabeticServiceService } from './diabetic-service.service';

describe('DiabeticServiceService', () => {
  let service: DiabeticServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabeticServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
