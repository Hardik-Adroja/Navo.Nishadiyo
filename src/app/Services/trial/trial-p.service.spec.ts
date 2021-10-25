import { TestBed } from '@angular/core/testing';

import { TrialPService } from './trial-p.service';

describe('TrialPService', () => {
  let service: TrialPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrialPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
