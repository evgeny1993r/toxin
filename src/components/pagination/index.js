import { ProxyPagination } from '../../libs/pagination';

const $pagination = $('.js-pagination');
$pagination.each((_, pagination) => {
  new ProxyPagination(pagination);
});
