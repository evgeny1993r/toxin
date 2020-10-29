import { Pagination } from './Pagination';

const $pagination = $('.js-pagination');
$pagination.each((_, pagination) => {
  new Pagination(pagination);
});
