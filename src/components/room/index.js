import { Room } from './Room';

const $room = $('.js-room');
$room.each((_, room) => {
  new Room(room);
});
