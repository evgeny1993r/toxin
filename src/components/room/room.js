class Room {
    constructor() {
        this.$room = $('.room')
        this.$room.each((idx, el) => {
            const $btnLeft = $(el).find('.room__btn-left')
            const $btnRight = $(el).find('.room__btn-right')
            const $images = $(el).find('.room__images')
            const $image = $(el).find('.room__image')
            const $circle = $(el).find('.room__circle')
            
            let width$images = 0 
            $image.each((idx, el) => {
                width$images = width$images - $(el).width()
            })

            const WIDTH_$IMAGE = $image.width()

            let translateValue = 0

            $btnLeft.on('click', () => {
                if(translateValue >= 0) return 
                translateValue = translateValue + WIDTH_$IMAGE
                $images.css({ transform: `translateX(${translateValue}px)`})

                let new_idx = 0

                $circle.each((idx, el) => {
                    if($(el).hasClass('room__circle_active')) {
                        $(el).removeClass('room__circle_active')
                        new_idx = idx - 1
                    }
                })

                $($circle[new_idx]).addClass('room__circle_active')
            })

            $btnRight.on('click', () => {
                if(translateValue <= width$images + WIDTH_$IMAGE) return 
                translateValue = translateValue - WIDTH_$IMAGE
                $images.css({ transform: `translateX(${translateValue}px)`})

                let new_idx = 0

                $circle.each((idx, el) => {
                    if($(el).hasClass('room__circle_active')) {
                        $(el).removeClass('room__circle_active')
                        new_idx = idx + 1
                    }
                })

                $($circle[new_idx]).addClass('room__circle_active')
            })
        })
    }
}

export {
    Room 
}