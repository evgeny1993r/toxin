import { MaskedTextField } from './Masked-text-field';

const $maskedTextField = $('.js-masked-text-field__datepicker');
$maskedTextField.each((_, maskedTextField) => {
  new MaskedTextField(maskedTextField);
});
