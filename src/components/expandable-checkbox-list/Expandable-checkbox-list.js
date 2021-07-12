class ExpandableCheckboxList {
  constructor(expandableCheckboxList) {
    this.$expandableCheckboxList = $(expandableCheckboxList);
    this.$expandableCheckboxListTitle = this.$expandableCheckboxList.find('.js-expandable-checkbox-list__title');
    this.expandableCheckboxListClassActive = 'expandable-checkbox-list_active';
    this.init();
  }

  init() {
    this.$expandableCheckboxListTitle.on('click', () => this.handleExpandableCheckboxListTitleClick());
    $(document).on('click', (e) => this.handleDocumentClick(e));
  }

  handleExpandableCheckboxListTitleClick() {
    this.$expandableCheckboxList.toggleClass(this.expandableCheckboxListClassActive);
  }

  handleDocumentClick(e) {
    if ($(e.target).parents('.js-expandable-checkbox-list').length === 0) {
      this.$expandableCheckboxList.removeClass(this.expandableCheckboxListClassActive);
    }
  }
}

export {
  ExpandableCheckboxList,
};
