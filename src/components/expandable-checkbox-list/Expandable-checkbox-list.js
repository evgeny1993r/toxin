class ExpandableCheckboxList {
    constructor(expandableCheckboxList) {
        this.$expandableCheckboxList = $(expandableCheckboxList)
        this.$expandableCheckboxList.on('click', () => {
            this.$expandableCheckboxList.addClass('expandable-checkbox-list_active')
        })
        this.$document = $(document)
        this.$document.on('click', (e) => {
            if($(e.target).parents('.js-expandable-checkbox-list').length === 0) {
                this.$expandableCheckboxList.removeClass('expandable-checkbox-list_active')
            }
        })
    }
}

export {
    ExpandableCheckboxList
}