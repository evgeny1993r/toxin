import { DropdownNumber } from './Dropdown-number';

const $dropdownNumber = $('.js-dropdown-number');
$dropdownNumber.each((_, dropdownNumber) => {
  new DropdownNumber(dropdownNumber);
});
