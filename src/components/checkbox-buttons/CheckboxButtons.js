class CheckboxButtons {
  constructor(checkboxButtons) {
    this.$checkboxButtons = $(checkboxButtons);
    this.$checkboxButtonsInputs = this.$checkboxButtons.find('.js-checkbox-buttons__input');
    this.checkboxButtonsClassLabelFocus = 'checkbox-buttons__label_focus';
    this.init();
  }

  init() {
    this.$checkboxButtonsInputs.each((_, el) => {
      $(el).on('focus', (e) => this.handleCheckboxInputFocus(e));
    });

    this.$checkboxButtonsInputs.each((_, el) => {
      $(el).on('blur', (e) => this.handleCheckboxInputBlur(e));
    });
  }

  handleCheckboxInputFocus(e) {
    $(e.target).parent().addClass(this.checkboxButtonsClassLabelFocus);
  }

  handleCheckboxInputBlur(e) {
    $(e.target).parent().removeClass(this.checkboxButtonsClassLabelFocus);
  }
}

export {
  CheckboxButtons,
};
