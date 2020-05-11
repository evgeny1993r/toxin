import './room.scss'

import '../rate-button/rate-button'

function Room () {

    // Объявление переменных 
    const $btn_left = $('.js-btn-left')
    const $btn_right = $('.js-btn-right')

    $btn_right.on('click', (e) => {
        const $room = $(e.target).parents('.room')
        const $image_items = $room.find('.js-images').children()
        const $circle_items = $room.find('.js-circles').children()

        let value = Number($image_items.attr('data-translatex'))
        if(value === -810) return 
        value += -270
        
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

        $image_items.css({'transform': `translateX(${value}px)`})
        $image_items.attr('data-translatex', value)
    })

    $btn_left.on('click', (e) => {
        const $room = $(e.target).parents('.room')
        const $image_items = $room.find('.js-images').children()
        const $circle_items = $room.find('.js-circles').children()

        let value = Number($image_items.attr('data-translatex'))
        if(value === 0) return 
        value += 270
        
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

        $image_items.css({'transform': `translateX(${value}px)`})
        $image_items.attr('data-translatex', value)
    })
}

export {
    Room
}