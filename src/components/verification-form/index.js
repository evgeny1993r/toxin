import { VerificationForm } from './VerificationForm';

const $verificationForm = $('.verification-form');
$verificationForm.each((_, verificationForm) => {
  new VerificationForm(verificationForm);
});
