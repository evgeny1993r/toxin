class ExpandableCheckboxList {
  constructor(expandableCheckboxList) {
    this.$expandableCheckboxList = $(expandableCheckboxList);
    this.$expandableCheckboxListInputs = this.$expandableCheckboxList.find('.js-expandable-checkbox-list__input');
    this.expandableCheckboxListClassActive = 'expandable-checkbox-list_active';
    this.expandableCheckboxListLabelClassFocus = 'expandable-checkbox-list__label_focus';
    this.isShowExpandableCheckboxList = false;
    this.init();
  }

  init() {
    this.$expandableCheckboxList.on('mousedown', () => {
      this.handleExpandableCheckboxListMousedown();
    });

    $(document).on('click', (e) => this.handleDocumentClick(e));

    this.$expandableCheckboxListInputs.each((_, el) => {
      $(el).on('focus', (e) => this.handleExpandableCheckboxListInputFocus(e));
      $(el).on('blur', (e) => this.handleExpandableCheckboxListInputBlur(e));
    });
  }

  handleExpandableCheckboxListMousedown() {
    this.$expandableCheckboxList.toggleClass(this.expandableCheckboxListClassActive);
    this.isShowExpandableCheckboxList = !this.isShowExpandableCheckboxList;
  }

  handleDocumentClick(e) {
    if ($(e.target).parents('.js-expandable-checkbox-list').length === 0) {
      this.$expandableCheckboxList.removeClass(this.expandableCheckboxListClassActive);
      this.isShowExpandableCheckboxList = false;
    }
  }

  handleExpandableCheckboxListInputFocus(e) {
    $(e.target).parent().addClass(this.expandableCheckboxListLabelClassFocus);
  }

  handleExpandableCheckboxListInputBlur(e) {
    $(e.target).parent().removeClass(this.expandableCheckboxListLabelClassFocus);
  }
}

export {
  ExpandableCheckboxList,
};
