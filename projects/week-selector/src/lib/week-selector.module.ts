import { NgModule } from '@angular/core';
import { WeekSelectorComponent } from './week-selector.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WeekSelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [WeekSelectorComponent]
})
export class WeekSelectorModule { }
