import { DateDropdown } from './DateDropdown';

const $dateDropdownDatepicker = $('.js-date-dropdown');
$dateDropdownDatepicker.each((_, dateDropdownDatepicker) => {
  new DateDropdown(dateDropdownDatepicker);
});
