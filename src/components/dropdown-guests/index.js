import { DropdownGuests } from './DropdownGuests';

const $dropdownGuests = $('.js-dropdown-guests');
$dropdownGuests.each((_, dropdownGuests) => {
  new DropdownGuests(dropdownGuests);
});
