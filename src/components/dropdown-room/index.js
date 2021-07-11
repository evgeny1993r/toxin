import { ProxyDropdownRoom } from '../../libs/dropdown-room';

const $dropdownRoom = $('.js-dropdown-room');
$dropdownRoom.each((_, dropdownRoom) => {
  new ProxyDropdownRoom(dropdownRoom);
});
