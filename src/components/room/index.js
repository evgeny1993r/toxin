import { Room } from './Room';

const $room = $('.room');
$room.each((_, room) => {
  new Room(room);
});
