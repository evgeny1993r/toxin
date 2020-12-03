class ExpandableCheckboxList {
  constructor(expandableCheckboxList) {
    this.$expandableCheckboxList = $(expandableCheckboxList);
    this.isShowExpandableCheckboxList = false;

    this.$expandableCheckboxList.on('click', () => {
      this.handleExpandableCheckboxListClick();
    });

    $(document).on('click', (e) => {
      this.handleDocumentClick(e);
    });
  }

  handleExpandableCheckboxListClick() {
    if (this.isShowExpandableCheckboxList) {
      this.$expandableCheckboxList.removeClass('expandable-checkbox-list_active');
      this.isShowExpandableCheckboxList = false;
    } else {
      this.$expandableCheckboxList.addClass('expandable-checkbox-list_active');
      this.isShowExpandableCheckboxList = true;
    }
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
