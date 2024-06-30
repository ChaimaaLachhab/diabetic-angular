import { TestBed } from '@angular/core/testing';

import { GlycemieServiceService } from '../../glycemie-service.service';

describe('GlycemieServiceService', () => {
  let service: GlycemieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlycemieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
