class ExpandableCheckboxList {
  constructor(expandableCheckboxList) {
    this.$expandableCheckboxList = $(expandableCheckboxList);
    this.$expandableCheckboxListInputs = this.$expandableCheckboxList.find('.js-expandable-checkbox-list__input');
    this.isShowExpandableCheckboxList = false;
    this.init();
  }

  init() {
    this.$expandableCheckboxList.on('click', () => {
      this.handleExpandableCheckboxListClick();
    });

    $(document).on('click', (e) => this.handleDocumentClick(e));

    this.$expandableCheckboxListInputs.each((_, el) => {
      $(el).on('focus', (e) => this.handleExpandableCheckboxListInputFocus(e));
      $(el).on('blur', (e) => this.handleExpandableCheckboxListInputBlur(e));
    });
  }

  handleExpandableCheckboxListClick() {
    this.$expandableCheckboxList.toggleClass('expandable-checkbox-list_active');
    this.isShowExpandableCheckboxList = !this.isShowExpandableCheckboxList;
  }

  handleDocumentClick(e) {
    if ($(e.target).parents('.js-expandable-checkbox-list').length === 0) {
      this.$expandableCheckboxList.removeClass('expandable-checkbox-list_active');
      this.isShowExpandableCheckboxList = false;
    }
  }

  handleExpandableCheckboxListInputFocus(e) {
    $(e.target).parent().addClass('expandable-checkbox-list__label_focus');
  }

  handleExpandableCheckboxListInputBlur(e) {
    $(e.target).parent().removeClass('expandable-checkbox-list__label_focus');
  }
}

export {
  ExpandableCheckboxList,
};
