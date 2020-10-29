import { DropdownGuests } from './Dropdown-guests';

const $dropdownGuests = $('.js-dropdown-guests');
$dropdownGuests.each((_, dropdownGuests) => {
  new DropdownGuests(dropdownGuests);
});
