import { VerificationForm } from './Verification-form';

const $verificationForm = $('.verification-form');
$verificationForm.each((_, verificationForm) => {
  new VerificationForm(verificationForm);
});
