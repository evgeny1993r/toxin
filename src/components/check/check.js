function Check(price, discount, collecting) {

    const $check = $('.check')
    const $dateDropdownEntryInput = $check.find('.js-date-dropdown__input-entry')
    const $dateDropdownCheckOutInput = $check.find('.js-date-dropdown__input-check-out')
    const $priceText = $check.find('.js-price__text')
    const $priceValue = $check.find('.js-price__value')
    const $discountText = $check.find('.js-discount__text')
    const $discountPrice = $check.find('.js-discount__price')
    const $collectingText = $check.find('.js-collecting__text')
    const $collectingPrice = $check.find('.js-collecting__price')
    const $totalPrice = $check.find('.js-total__price')


    function createTextPrice(value) {
        const arr = String(value).split('')
        const ARR_LENGTH = arr.length
        arr.splice(ARR_LENGTH - 3, 0, ' ')
        return arr.join('')
    }

    function createStringPrice() {
        let timeValue = 0
        let timeText = 'суток'

        setTimeout(() => {
            timeValue = ($dateDropdownCheckOutInput.data('date') - $dateDropdownEntryInput.data('date')) / 86400000

            if(timeValue === 1) {
                timeText = 'сутки'
            }

            $priceText.text(`${createTextPrice(price)}₽ x ${timeValue} ${timeText}`)
            $priceValue.text(`${createTextPrice(timeValue * price)}₽`)
        }, 100)

        

    }

    function createStringDiscount() {
        $discountText.text(`Сбор за услуги: скидка ${createTextPrice(discount)}₽`)
        $discountPrice.text(`0₽`)
    }

    function createStringCollection() {
        $collectingText.text(`Сбор за дополнительные услуги`)
        $collectingPrice.text(`${collecting}₽`)
    }

    function createStringTotal() {
        setTimeout(() => {
            $totalPrice.text(`${createTextPrice(($dateDropdownCheckOutInput.data('date') - $dateDropdownEntryInput.data('date')) / 86400000 * price - discount + collecting)}₽`)
        }, 200)
        
    }

    setTimeout(() => {
        const $dateDropdownBtnApply = $check.find('.js-datepicker__apply')    
        $dateDropdownBtnApply.on('click', () => {
            createStringPrice()
            createStringTotal()
        })
    }, 100)

    createStringPrice()
    createStringDiscount()
    createStringCollection()
    createStringTotal()
}

export {
    Check 
}