import { SubscriptionTextField } from './SubscriptionTextField';

const $subscriptionTextField = $('.js-subscription-text-field');
$subscriptionTextField.each((_, subscriptionTextField) => {
  new SubscriptionTextField(subscriptionTextField);
});
