import { Datepicker } from './Date-dropdown-datepicker';

const $datepickers = $('.js-date-dropdown-datepicker');
$datepickers.each((_, dateDropdownDatepicker) => {
  new Datepicker(dateDropdownDatepicker);
});
