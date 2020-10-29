import { FilterDateDropdown } from './Filter-date-dropdown';

const $filterDteDropdown = $('.js-filter-date-dropdown__datepicker');
$filterDteDropdown.each((_, filterDateDropdown) => {
  new FilterDateDropdown(filterDateDropdown);
});
