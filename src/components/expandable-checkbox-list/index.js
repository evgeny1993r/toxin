import { ExpandableCheckboxList } from './Expandable-checkbox-list';

const $expandableCheckboxList = $('.js-expandable-checkbox-list');
$expandableCheckboxList.each((_, expandableCheckboxList) => {
  new ExpandableCheckboxList(expandableCheckboxList);
});
