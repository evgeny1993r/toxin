class ExpandableCheckboxList {
  constructor(expandableCheckboxList) {
    this.$expandableCheckboxList = $(expandableCheckboxList);
    this.isShowExpandableCheckboxList = false;

    this.$expandableCheckboxList.on('click', () => {
      this.handleExpandableCheckboxListClick();
    });

    $(document).on('click', (e) => this.handleDocumentClick(e));
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
}

export {
  ExpandableCheckboxList,
};
