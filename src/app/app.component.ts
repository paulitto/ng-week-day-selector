import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' Collection of components';
  opened: boolean;
  selDate = moment().add(1, 'days');
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

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
  constructor(private breakpointObserver: BreakpointObserver) { }
}
