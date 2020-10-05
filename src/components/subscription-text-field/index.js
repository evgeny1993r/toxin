import { SubscriptionTextField } from './Subscription-text-field'

const $subscriptionTextField = $('.js-subsciption-text-field')
$subscriptionTextField.each((_, subscriptionTextField) => {
    new SubscriptionTextField(subscriptionTextField)    
})
