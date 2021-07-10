import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-week-day-selector-example',
  templateUrl: './week-day-selector-example.component.html',
  styleUrls: ['./week-day-selector-example.component.scss']
})
export class WeekDaySelectorExampleComponent implements OnInit {
  selDate = moment().add(1, 'days');
  constructor() { }
  code1 = `<week-day-selector></week-day-selector>`;
  code2 = `
  selected date: {{selDate.format('dddd, MMMM Do YYYY')}}
  <week-day-selector
    [(selectedDate)]="selDate"
    [weekOnTop]="true"
    [frameStyle]="{
      'border-radius': '50%',
      'background': 'linear-gradient(to right, #ff4e50, #f9d423)',
      'border': 'none'
    }">
  </week-day-selector>`;
  code3 = `<week-day-selector 
  [frameColor]="'#3f51b5'"
  [weekOnTop]="true"
  [showMonth]="false">
</week-day-selector>`;
  code4 = `<week-day-selector 
[weekOnTop]="true" 
[frameColor]="'#333'"
[showFrameSectionBottom]="true"
[monthStyle]="{'font-size': '.3em'}"
[monthStyleActive]="{'color': '#f2f2f2'}"
[monthFormat]="'MMMM'"
[frameSectionBottomStyle]="{'background-color': '#ee210a'}">
</week-day-selector>`;
code5 = `<week-day-selector
[frameColor]="'#3f51b5'"
[showArrows]="false"
[showMonth]="false">
</week-day-selector>`;

  ngOnInit() {
  }

}
