import './expandable-checkbox-list.scss'

function ExpandableCheckboxList () {
    const $expandableCheckboxList = $('.js-expandable-checkbox-list')
    $expandableCheckboxList.each((idx, el) => {
        $(el).on('click', () => {
            $(el).addClass('expandable-checkbox-list_active')
        })
    })

    $(document).on('click', (e) => {
        if($(e.target).parents('.js-expandable-checkbox-list').length === 0) {
            $expandableCheckboxList.removeClass('expandable-checkbox-list_active')
        }
    })    
}

export {
    ExpandableCheckboxList
}