import './like-button.scss'

$(document).ready(() => {
    const $like_button = $('.js-like-button')
    $like_button.on('click', (e) => {
        const $icon = $(e.currentTarget).find('.js-icon')
        const $like_button_value = $(e.currentTarget).find('.js-like-button__value')
        let value = Number($like_button_value.text())
        console.log(value)
        if($(e.currentTarget).hasClass('like-button_active')) {
            $icon.removeClass('icon-like_button_active')
            $icon.addClass('icon-like_button_inActive')
            $(e.currentTarget).removeClass('like-button_active')
            $like_button_value.text(value - 1)
        } else {
            $icon.removeClass('icon-like_button_inActive')
            $icon.addClass('icon-like_button_active')
            $(e.currentTarget).addClass('like-button_active')
            $like_button_value.text(value + 1)
        }
    })
})