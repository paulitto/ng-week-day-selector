import { NgModule } from '@angular/core';
import { WeekDaySelectorComponent } from './week-day-selector.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WeekDaySelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [WeekDaySelectorComponent]
})
export class WeekDaySelectorModule { }
