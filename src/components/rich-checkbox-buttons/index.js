import { RichCheckboxButtons } from './RichCheckboxButtons';

const $richCheckboxButtons = $('.js-rich-checkbox-buttons');
$richCheckboxButtons.each((_, el) => {
  new RichCheckboxButtons(el);
});
