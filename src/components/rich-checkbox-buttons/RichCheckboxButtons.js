class RichCheckboxButtons {
  constructor(richCheckboxButtons) {
    this.$richCheckboxButtons = $(richCheckboxButtons);
    this.$richCheckboxButtonsInputs = this.$richCheckboxButtons.find('.js-rich-checkbox-buttons__input');
    this.richCheckboxButtonsContainerClass = '.js-rich-checkbox-buttons__container';
    this.richCheckboxButtonsLabelClass = '.js-rich-checkbox-buttons__label';
    this.richCheckboxButtonsTextClass = '.js-rich-checkbox-buttons__text';
    this.richCheckboxButtonsLabelClassFocus = 'rich-checkbox-buttons__label_focus';
    this.richCheckboxButtonsTextClassFocus = 'rich-checkbox-buttons__text_focus';
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
      .parents(this.richCheckboxButtonsContainerClass)
      .find(this.richCheckboxButtonsLabelClass)
      .addClass(this.richCheckboxButtonsLabelClassFocus);

    $(e.target)
      .parents(this.richCheckboxButtonsContainerClass)
      .find(this.richCheckboxButtonsTextClass)
      .addClass(this.richCheckboxButtonsTextClassFocus);
  }

  handleRichCheckboxButtonsInputBlur(e) {
    $(e.target)
      .parents(this.richCheckboxButtonsContainerClass)
      .find(this.richCheckboxButtonsLabelClass)
      .removeClass(this.richCheckboxButtonsLabelClassFocus);

    $(e.target)
      .parents(this.richCheckboxButtonsContainerClass)
      .find(this.richCheckboxButtonsTextClass)
      .removeClass(this.richCheckboxButtonsTextClassFocus);
  }
}

export {
  RichCheckboxButtons,
};
