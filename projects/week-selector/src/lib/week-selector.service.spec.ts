import { TestBed } from '@angular/core/testing';

import { WeekSelectorService } from './week-selector.service';

describe('WeekSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekSelectorService = TestBed.get(WeekSelectorService);
    expect(service).toBeTruthy();
  });
});
