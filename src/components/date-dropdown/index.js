import { DateDropdown } from './Date-dropdown';

const $dateDropdownDatepicker = $('.js-date-dropdown__datepicker');
$dateDropdownDatepicker.each((_, dateDropdownDatepicker) => {
  new DateDropdown(dateDropdownDatepicker);
});
