import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;
import { IWeekDay, WEEKDAY_NAMES, WeekDayShort, MonthShort } from './week-day-selector.helper';

interface IDay {
  moment: moment.Moment;
  day: number;
  weekday: WeekDayShort;
  month: MonthShort;
  isActive?: boolean;
}
@Component({
  selector: 'week-day-selector',
  templateUrl: './week-day-selector.component.html',
  styleUrls: ['./week-day-selector.component.scss'],
})
export class WeekDaySelectorComponent implements OnInit {

  @Input() disabled = false;

  // active frame styling
  @Input() frameColor;
  @Input() frameStyle;
  @Input() frameSectionColor;
  @Input() frameSectionStyle;

  // sections inside active frame
  @Input() showFrameSectionTop = false;
  @Input() frameSectionTopStyle;
  @Input() showFrameSectionBottom = false;
  @Input() frameSectionBottomStyle;
  @Input() showFrameSectionMiddle = false;
  @Input() frameSectionMiddleStyle;

  // month name
  @Input() showMonth = true;
  @Input() monthColor: string;
  @Input() monthStyle;
  @Input() monthStyleActive;
  @Input() monthFormat = 'MMM'; // moment js format

  // week name
  @Input() showWeekday = true;
  @Input() weekColor: string;
  @Input() weekStyle;
  @Input() weekFormat = 'ddd'; // moment js format

  // day
  @Input() showDay = true;
  @Input() dayColor: string;
  @Input() dayStyle;
  @Input() dayFormat = 'D'; // moment js format

  // show arrows
  @Input() showArrows = true;

  // shows weekdays on top of the date container
  @Input() weekOnTop = false;

  @Input() selectedDate: moment.Moment;

  @Output()
  selectedDateChange = new EventEmitter<moment.Moment>();

  weekdays: IWeekDay[] = WEEKDAY_NAMES;

  arrDays: IDay[] = [];

  activeDate: IDay;
  activeDateIndex: number;

  scrollPosition: string;

  cellSize = 2;
  cellMargin = '';

  animateWeek = true;
  constructor() {
  }

  activateDay(index: number = 0, day?: IDay) {

    if (index > this.arrDays.length - 4) {
      this.animateWeek = false;
      this.addWeekAhead();
    }

    if (index < 4) {
      this.animateWeek = false;
      this.addWeekBefore();
      index = index + 7;
    }
    // wait until scroll updated in ui if more days added to array by addWeekBefore or addWeekAhead
    requestAnimationFrame(() => {
      this.animateWeek = true;
      if (!day && this.arrDays.length > index) {
        day = this.arrDays[index];
      }
      this.selectedDateChange.emit(day.moment.clone());
      this.activeDate.isActive = false;
      day.isActive = true;
      this.activeDate = day;
      this.activeDateIndex = index;
      this.updateScrollPosition();
    });
  }

  ngOnInit() {
    this.applyStyles();

    // set selected as today if it isnt provided
    if (!this.selectedDate) {
      this.selectedDate = moment();
    }

    // fill in days +/- 1 week from now
    this.addWeekBefore();
    this.addDate(this.selectedDate, true);
    this.addWeekAhead();
  }

  private applyStyles() {
    // frame styles
    this.frameStyle = {
      'border-color': this.frameColor,
      ...this.frameStyle
    };
    this.frameSectionStyle = {
      'background-color': this.frameSectionColor,
      ...this.frameSectionStyle
    };
    this.frameSectionTopStyle = {
      'background-color': this.frameSectionColor,
      ...this.frameSectionStyle,
      ...this.frameSectionTopStyle
    };
    this.frameSectionBottomStyle = {
      'background-color': this.frameSectionColor,
      ...this.frameSectionStyle,
      ...this.frameSectionBottomStyle
    };

    // month styles
    this.monthStyleActive = {
      ...this.monthStyle,
      ...this.monthStyleActive
    };
    if (this.monthColor) {
      this.monthStyle = {
        'color': this.monthColor,
        ...this.monthStyle
      };
      this.monthStyleActive = {
        'color': this.monthColor,
        ...this.monthStyleActive
      };
    }

    // week styles
    if (this.weekColor) {
      this.weekStyle = {
        'color': this.weekColor,
        ...this.weekStyle
      };
    }

    this.cellMargin = `calc((100%/7 - ${this.cellSize}em)/2)`;
  }

  private addWeekBefore() {
    const date = this.arrDays.length ?
      this.arrDays[0].moment.clone() :
      this.selectedDate.clone();
    if (!date) {
      return;
    }
    const newDates: IDay[] = [];
    for (let i = 7; i > 0; i--) {
      newDates.push(this.composeDate(date.clone().subtract(i, 'days')));
    }
    this.arrDays = [...newDates, ...this.arrDays];

    // adjust current active index and position based on new array length
    if (this.activeDateIndex) {
      this.activeDateIndex += 7;
    }
    this.updateScrollPosition();
  }

  private addWeekAhead() {
    const date = this.arrDays.length ?
      this.arrDays[this.arrDays.length - 1].moment.clone() :
      this.selectedDate.clone();
    for (let i = 1; i < 8; i++) {
      this.addDate(date.clone().add(i, 'days'));
    }
  }

  private addDate(date: moment.Moment, isActive = false) {
    const newDate = this.composeDate(date, isActive);
    // store reference to active date (to switch off active flag on the same obj without iterating array)
    if (isActive) {
      this.activeDate = newDate;
      this.activeDateIndex = this.arrDays.length;
      this.updateScrollPosition();
    }
    this.arrDays.push(newDate);
  }

  private composeDate(date: moment.Moment, isActive = false) {
    return {
      moment: date.clone(),
      day: parseInt(date.format(this.dayFormat), 10),
      weekday: date.format(this.weekFormat) as WeekDayShort,
      month: date.format(this.monthFormat) as MonthShort,
      isActive
    };
  }

  // update scroll position of weekdays based on activeDateIndex
  private updateScrollPosition() {
    // -3 because we are going to have 3 cells before and after active date (which makes 7 days in total)
    const framesOffset = this.activeDateIndex - 3;
    this.scrollPosition = `calc(-${(this.cellSize * framesOffset)}em - ${framesOffset}*(100%/7 - ${this.cellSize}em))`;
  }
}
