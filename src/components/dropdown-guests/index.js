import { ProxyDropdownGuests } from '../../libs/dropdown-guests';

const $dropdownGuests = $('.js-dropdown-guests');
$dropdownGuests.each((_, dropdownGuests) => {
  new ProxyDropdownGuests(dropdownGuests);
});
