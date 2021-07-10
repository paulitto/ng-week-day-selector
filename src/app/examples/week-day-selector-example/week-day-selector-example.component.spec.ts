import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDaySelectorExampleComponent } from './week-day-selector-example.component';

describe('WeekDaySelectorExampleComponent', () => {
  let component: WeekDaySelectorExampleComponent;
  let fixture: ComponentFixture<WeekDaySelectorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekDaySelectorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDaySelectorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
