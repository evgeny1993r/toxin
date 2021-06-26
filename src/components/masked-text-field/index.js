import { MaskedTextField } from './MaskedTextField';

const $maskedTextField = $('.js-masked-text-field');
$maskedTextField.each((_, maskedTextField) => {
  new MaskedTextField(maskedTextField);
});
