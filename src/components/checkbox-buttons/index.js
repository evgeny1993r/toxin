import { CheckboxButtons } from './CheckboxButtons';

const $checkboxButtons = $('.js-checkbox-buttons');
$checkboxButtons.each((_, el) => {
  new CheckboxButtons(el);
});
