import { TestBed, inject } from '@angular/core/testing';

import { LdsapiService } from './ldsapi.service';

describe('LdsapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LdsapiService]
    });
  });

  it('should be created', inject([LdsapiService], (service: LdsapiService) => {
    expect(service).toBeTruthy();
  }));
});
