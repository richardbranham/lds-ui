import { TestBed, inject } from '@angular/core/testing';

import { LdsApiService } from './lds-api.service';

describe('LdsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LdsApiService]
    });
  });

  it('should be created', inject([LdsApiService], (service: LdsApiService) => {
    expect(service).toBeTruthy();
  }));
});
