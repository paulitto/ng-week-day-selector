import * as moment_ from 'moment';
const moment = moment_;

export interface IWeekDay {
    name: WeekDay;
    short: WeekDayShort;
    min: WeekDayMin;
}

export enum MonthShort {
    Jan = 'Jan',
    Feb = 'Feb',
    Mar = 'Mar',
    Apr = 'Apr',
    May = 'May',
    Jun = 'Jun',
    Jul = 'Jul',
    Aug = 'Aug',
    Sep = 'Sep',
    Oct = 'Oct',
    Nov = 'Nov',
    Dec = 'Dec'
}
export enum WeekDay {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
}

export enum WeekDayShort {
    Sun = 'Sun',
    Mon = 'Mon',
    Tue = 'Tue',
    Wed = 'Wed',
    Thu = 'Thu',
    Fri = 'Fri',
    Sat = 'Sat',
}

export enum WeekDayMin {
    Sun = 'Su',
    Mon = 'Mo',
    Tue = 'Tu',
    Wed = 'We',
    Thu = 'Tu',
    Fri = 'Fr',
    Sat = 'Sa',
}

// get weekday names sorted according to locale from moment
export const WEEKDAYS_MIN = moment.weekdaysMin(true);
export const WEEKDAYS_SHORT = moment.weekdaysMin(true);
export const WEEKDAYS_LOCAL = moment.weekdays(true);
export const WEEKDAY_NAMES: IWeekDay[] = WEEKDAYS_LOCAL.map((x, i) => ({
    name: x as WeekDay,
    short: WEEKDAYS_SHORT[i] as WeekDayShort,
    min: WEEKDAYS_MIN[i] as WeekDayMin
}));

