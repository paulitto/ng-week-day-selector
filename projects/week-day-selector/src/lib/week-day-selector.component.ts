import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
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

  @Input()
  disabled = false;

  @Input()
  activeColor;

  @Input()
  selectedDate: moment.Moment;

  @Input()
  showMonth = true;

  @Input()
  showWeekday = true;

  @Input()
  showDay = true;

  // shows weekdays on top of the date container
  // (only works when all showMonth/showWeekday/showDay are true)
  @Input()
  weekOnTop = false;

  // show alternative look with red background for month
  // (only works when all showMonth/showWeekday/showDay are true and weekOnTop true)
  @Input()
  altView = false;

  @Output()
  selectedDateChange = new EventEmitter<moment.Moment>();

  weekdays: IWeekDay[] = WEEKDAY_NAMES;

  arrDays: IDay[] = [];

  activeDate: IDay;
  activeDateIndex: number;

  scrollPosition: string;

  constructor() {
  }

  activateDay(index: number = 0, day?: IDay) {

    if (!day && this.arrDays.length > index) {
      day = this.arrDays[index];
    }

    this.selectedDateChange.emit(day.moment.clone());

    this.activeDate.isActive = false;
    day.isActive = true;
    this.activeDate = day;
    this.activeDateIndex = index;
    this.updateScrollPosition();

    if (index > this.arrDays.length - 4) {
      this.addWeekAhead();
    }

    if (index < 4) {
      this.addWeekBefore();
    }
  }

  ngOnInit() {
    // set selected as today if it isnt provided
    if (!this.selectedDate) {
      this.selectedDate = moment();
    }

    // fill in days +/- 1 week from now
    this.addWeekBefore();
    this.addDate(this.selectedDate, true);
    this.addWeekAhead();
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
      day: parseInt(date.format('D'), 10),
      weekday: date.format('ddd') as WeekDayShort,
      month: date.format('MMM') as MonthShort,
      isActive
    };
  }

  // update scroll position of weekdays based on activeDateIndex
  private updateScrollPosition() {
    this.scrollPosition = - (2.2 * (this.activeDateIndex - 3)) + 'em';
  }

}
