class SubscriptionTextField {
  constructor(subscriptionTextField) {
    this.$subscriptionTextField = $(subscriptionTextField);
    this.$subscriptionTextFieldInput = this.$subscriptionTextField.find('.js-subscription-text-field__input');
    this.subscriptionTextFieldClassActive = 'subscription-text-field_active';

    this.$subscriptionTextFieldInput.on('focus', () => this.handleSubscriptionTextFieldFocus());

    this.$subscriptionTextFieldInput.on('blur', () => this.handleSubscriptionTextFieldBlur());
  }

  handleSubscriptionTextFieldFocus() {
    this.$subscriptionTextField.addClass(this.subscriptionTextFieldClassActive);
  }

  handleSubscriptionTextFieldBlur() {
    this.$subscriptionTextField.removeClass(this.subscriptionTextFieldClassActive);
  }
}

export {
  SubscriptionTextField,
};
