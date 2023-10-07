import { TestBed } from '@angular/core/testing';

import { ColorsOfNumbersService } from './colors-of-numbers.service';

describe('ColorsOfNumbersService', () => {
  let service: ColorsOfNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorsOfNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
