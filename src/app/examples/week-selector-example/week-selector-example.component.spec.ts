import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekSelectorExampleComponent } from './week-selector-example.component';

describe('WeekSelectorExampleComponent', () => {
  let component: WeekSelectorExampleComponent;
  let fixture: ComponentFixture<WeekSelectorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekSelectorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekSelectorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
