import './subscription-text-field.scss'

function SubscriptionTextField () {
    const $subscriptionTextField = $('.subscription-text-field')
    const $subscriptionTextFieldInput = $('.subscription-text-field__input')
    $subscriptionTextFieldInput.on('focus', () => {
        $subscriptionTextField.addClass('subscription-text-field_active')
    })
    $subscriptionTextFieldInput.on('blur', () => {
        $subscriptionTextField.removeClass('subscription-text-field_active')
    })
}

export {
    SubscriptionTextField
}