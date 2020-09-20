import './buttons.scss'

$(document).ready(() => {
    const $btn = $('.js-btn')
    $btn.each((idx, el) => {
        $(el).mouseenter(() => {
            $(el).addClass('btn_hover')
        })
        $(el).mouseleave(() => {
            $(el).removeClass('btn_hover')
        })
    })
})