import './room.scss'

import '../rate-button/rate-button'

function Room () {

    // Объявление переменных
    const $btn_left = $('.js-btn-left')
    const $btn_right = $('.js-btn-right')
    const $image_items = $('.js-images').children()
    const $circle_items = $('.js-circles').children()

    let value = 0

    // Функция, обновления элементов circle
    function updateCircles (value) {
        if(value === 0) {
            $circle_items.removeClass('circle_active')
            $circle_items.eq(0).addClass('circle_active')
        } else if(value === -270) {
            $circle_items.removeClass('circle_active')
            $circle_items.eq(1).addClass('circle_active')
        } else if(value === -540) {
            $circle_items.removeClass('circle_active')
            $circle_items.eq(2).addClass('circle_active')
        } else if(value === -810) {
            $circle_items.removeClass('circle_active')
            $circle_items.eq(3).addClass('circle_active')
        }
    }

    $btn_left.on('click', () => {
        if(value === 0) return 
        value += 270
        $image_items.css({'transform': `translateX(${value}px)`})
        updateCircles(value)
    })

    $btn_right.on('click', () => {
        if(value === -810) return 
        value -= 270
        $image_items.css({'transform':`translateX(${value}px)`})
        updateCircles(value)
    })
}

export {
    Room
}