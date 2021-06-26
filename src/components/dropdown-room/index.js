import { DropdownRoom } from './DropdownRoom';

const $dropdownRoom = $('.js-dropdown-room');
$dropdownRoom.each((_, dropdownRoom) => {
  new DropdownRoom(dropdownRoom);
});
