import { ProxyDateDropdown } from '../../libs/date-dropdown';

const $dateDropdownDatepicker = $('.js-date-dropdown');
$dateDropdownDatepicker.each((_, dateDropdownDatepicker) => {
  new ProxyDateDropdown(dateDropdownDatepicker);
});
