import { TestBed } from '@angular/core/testing';

import { DiabeticService } from './diabetic-service.service';

describe('DiabeticServiceService', () => {
  let service: DiabeticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabeticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
