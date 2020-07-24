# Description
Simplistic customizable mobile-friendly angular component to select dates from a nearby week

See demo with examples of usage [here](https://paulitto.github.io/ng-toolkit/#week-day-selector)

# Usage
week-day-selector
import WeekDaySelectorModule into your angular module
use <week-day-selector></week-day-selector> in your templates
you can use the following props to customize it:

## Inputs

General

    disabled : boolean (default false);

    selectedDate : moment js object (default is current date);

    showArrows : boolean (default true) - shows arrows;

    weekOnTop : boolean (default false) - Shows weekdays on top of the date container;

Active frame styling

    frameColor : color hex string

    frameStyle : angular style object to override default styles (will be passed into ngstyle for relevant element)

    frameSectionColor : color hex string

    frameSectionStyle : angular style object to override default styles

Customize inside active frame:

    showFrameSectionTop : boolean (default false)

    frameSectionTopStyle : angular style object to override default styles

    showFrameSectionBottom : boolean (default false)

    frameSectionBottomStyle : angular style object to override default styles

    showFrameSectionMiddle : boolean (default false)

    frameSectionMiddleStyle : angular style object to override default styles

Month name:

    showMonth : boolean (default true);

    monthColor : string;

    monthStyle : angular style object to override default styles

    monthStyleActive : angular style object to override default styles

    monthFormat : moment js format string (default 'MMM')

Week name:

    showWeekday : boolean (default true);

    weekColor : string;

    weekStyle : angular style object to override default styles

    weekFormat : moment js format string (default 'ddd')

Day:

    showDay : boolean (default true);

    dayColor : color hex string;

    dayStyle : angular style object to override default styles

    dayFormat : moment js format string (default 'D')

Output events:

    selectedDateChange : emits selected date as moment object

see some examples [here](https://paulitto.github.io/ng-toolkit/#week-day-selector)