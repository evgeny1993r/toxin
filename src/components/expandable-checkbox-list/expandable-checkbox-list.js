import './expandable-checkbox-list.scss'

$(document).ready(() => {
    const $expandable_checkbox_list = $('.expandable-checkbox-list')
    $expandable_checkbox_list.on('click', (e) => {
        $(e.currentTarget).addClass('expandable-checkbox-list_active')
    })

    $(document).on('click', (e) => {
        if($(e.target).parents('.expandable-checkbox-list').length === 0) {
            $expandable_checkbox_list.removeClass('expandable-checkbox-list_active')
        }
    })
})