import { DateDropdown } from './Date-dropdown';

const $dateDropdownDatepicker = $('.js-date-dropdown');
$dateDropdownDatepicker.each((_, dateDropdownDatepicker) => {
  new DateDropdown(dateDropdownDatepicker);
});
