import { Calendar } from './Calendar';

const $calendar = $('.js-calendar');
$calendar.each((_, calendar) => {
  new Calendar(calendar);
});
