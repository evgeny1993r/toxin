class SubscriptionTextField {
    constructor() {
        this.$subscriptionTextField = $('.js-subscription-text-field')
        this.$subscriptionTextFieldInput = this.$subscriptionTextField.find('.js-subscription-text-field__input')
        this.$subscriptionTextFieldInput.on('focus', () => {
            this.$subscriptionTextField.addClass('subscription-text-field_active')
        })
        this.$subscriptionTextFieldInput.on('blur', () => {
            this.$subscriptionTextField.removeClass('subscription-text-field_active')
        })
    }
}

export {
    SubscriptionTextField
}