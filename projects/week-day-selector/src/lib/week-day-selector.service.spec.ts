import { TestBed } from '@angular/core/testing';

import { WeekDaySelectorService } from './week-day-selector.service';

describe('WeekDaySelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekDaySelectorService = TestBed.get(WeekDaySelectorService);
    expect(service).toBeTruthy();
  });
});
