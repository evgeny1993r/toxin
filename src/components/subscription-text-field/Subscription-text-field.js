class SubscriptionTextField {
  constructor(subscriptionTextField) {
    this.$subscriptionTextField = $(subscriptionTextField);
    this.$subscriptionTextFieldInput = this.$subscriptionTextField.find('.js-subscription-text-field__input');

    this.$subscriptionTextFieldInput.on('focus', () => this.handleSubscriptionTextFieldFocus());

    this.$subscriptionTextFieldInput.on('blur', () => this.handleSubscriptionTextFieldBlur());
  }

  handleSubscriptionTextFieldFocus() {
    this.$subscriptionTextField.addClass('subscription-text-field_active');
  }

  handleSubscriptionTextFieldBlur() {
    this.$subscriptionTextField.removeClass('subscription-text-field_active');
  }
}

export {
  SubscriptionTextField,
};
