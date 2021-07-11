import { ProxyFilterDateDropdown } from '../../libs/filter-date-dropdown';

const $filterDteDropdown = $('.js-filter-date-dropdown');
$filterDteDropdown.each((_, filterDateDropdown) => {
  new ProxyFilterDateDropdown(filterDateDropdown);
});
