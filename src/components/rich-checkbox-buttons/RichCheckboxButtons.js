class RichCheckboxButtons {
  constructor(richCheckboxButtons) {
    this.$richCheckboxButtons = $(richCheckboxButtons);
    this.$richCheckboxButtonsInputs = this.$richCheckboxButtons.find('.js-rich-checkbox-buttons__input');
    this.init();
  }

  init() {
    this.$richCheckboxButtonsInputs.each((_, el) => {
      $(el).on('focus', (e) => this.handleRichCheckboxButtonsInputFocus(e));
      $(el).on('blur', (e) => this.handleRichCheckboxButtonsInputBlur(e));
    });
  }

  handleRichCheckboxButtonsInputFocus(e) {
    $(e.target)
      .parents('.js-rich-checkbox-buttons__container')
      .find('.js-rich-checkbox-buttons__label')
      .addClass('rich-checkbox-buttons__label_focus');

    $(e.target)
      .parents('.js-rich-checkbox-buttons__container')
      .find('.js-rich-checkbox-buttons__text')
      .addClass('rich-checkbox-buttons__text_focus');
  }

  handleRichCheckboxButtonsInputBlur(e) {
    $(e.target)
      .parents('.js-rich-checkbox-buttons__container')
      .find('.js-rich-checkbox-buttons__label')
      .removeClass('rich-checkbox-buttons__label_focus');

    $(e.target)
      .parents('.js-rich-checkbox-buttons__container')
      .find('.js-rich-checkbox-buttons__text')
      .removeClass('rich-checkbox-buttons__text_focus');
  }
}

export {
  RichCheckboxButtons,
};
