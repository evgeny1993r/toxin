class ExpandableCheckboxList {
    constructor() {
        this.$expandableCheckboxList = $('.js-expandable-checkbox-list')
        this.$expandableCheckboxList.each((idx, el) => {
            $(el).on('click', () => {
                $(el).addClass('expandable-checkbox-list_active')
            })
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