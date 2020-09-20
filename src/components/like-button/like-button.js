function LikeButton () {
    const $likeButton = $('.js-like-button')
    $likeButton.each((idx, el) => {
        $(el).on('click', () => {
            const $icon = $(el).find('.js-icon')
            const $likeButtonValue = $(el).find('.js-like-button__value')
            let value = Number($likeButtonValue.text())
            if($(el).hasClass('like-button_active')) {
                $icon.removeClass('icon-like_button_active')
                $icon.addClass('icon-like_button_inActive')
                $(el).removeClass('like-button_active')
                $likeButtonValue.text(value - 1)
            } else {
                $icon.removeClass('icon-like_button_inActive')
                $icon.addClass('icon-like_button_active')
                $(el).addClass('like-button_active')
                $likeButtonValue.text(value + 1)
            }    
        })
    })  
}

export {
    LikeButton
}