import { TestBed } from '@angular/core/testing';

import { CurrentRatesService } from './current-rates.service';

describe('CurrentRatesService', () => {
  let service: CurrentRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
