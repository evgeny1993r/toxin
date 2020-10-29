import { Header } from './Header';

const $header = $('.js-header');
$header.each((_, header) => {
  new Header(header);
});
