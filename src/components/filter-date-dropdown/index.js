import { FilterDateDropdown } from './FilterDateDropdown';

const $filterDteDropdown = $('.js-filter-date-dropdown');
$filterDteDropdown.each((_, filterDateDropdown) => {
  new FilterDateDropdown(filterDateDropdown);
});
