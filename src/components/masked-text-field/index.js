import { MaskedTextField } from './Masked-text-field';

const $maskedTextField = $('.masked-text-field__input');
$maskedTextField.each((_, maskedTextField) => {
  new MaskedTextField(maskedTextField);
});
