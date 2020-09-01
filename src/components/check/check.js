import './check.scss'

import { DateDropdown } from '../date-dropdown/date-dropdown'
import '../../components/dropdown-guests/dropdown-guests'
import '../../components/dropdown-guests/dropdown-guests.css'
import '../../components/buttons/buttons'

function Check(
    dateDropdownId, 
    dateDropdownisShow, 
    dateDropdownDateOne, 
    dateDropdownDateTwo,
    dropdownGuestsId,
    dropdownGuestsValue,
    price, discount, collecting) {

    const $check = $('.check')
    const $dateDropdown = DateDropdown(dateDropdownId, dateDropdownisShow, dateDropdownDateOne, dateDropdownDateTwo)
    $(`#${dropdownGuestsId}`).dropdownGuests(dropdownGuestsValue)

    const $priceText = $check.find('.js-price__text')
    const $priceValue = $check.find('.js-price__value')
    const $discountText = $check.find('.js-discount__text')
    const $discountPrice = $check.find('.js-discount__price')
    const $collectingText = $check.find('.js-collecting__text')
    const $collectingPrice = $check.find('.js-collecting__price')
    const $totalPrice = $check.find('.js-total__price')
    const $dateDropdownBtnApply = $dateDropdown.$el.find('.js-datepicker__apply')

    function createTextPrice(value) {
        const arr = String(value).split('')
        const ARR_LENGTH = arr.length
        arr.splice(ARR_LENGTH - 3, 0, ' ')
        return arr.join('')
    }

    function createStringPrice() {
        const TIME_VALUE = ($dateDropdown.selectedDates[1] - $dateDropdown.selectedDates[0]) / 86400000
        let timeText = 'суток'
        if(TIME_VALUE === 1) {
            timeText = 'сутки'
        }

        $priceText.text(`${createTextPrice(price)}₽ x ${TIME_VALUE} ${timeText}`)
        $priceValue.text(`${createTextPrice(TIME_VALUE * price)}₽`)
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
        $totalPrice.text(`${createTextPrice(($dateDropdown.selectedDates[1] - $dateDropdown.selectedDates[0]) / 86400000 * price - discount + collecting)}₽`)
    }

    $dateDropdownBtnApply.on('click', () => {
        createStringPrice()
        createStringTotal()
    })

    createStringPrice()
    createStringDiscount()
    createStringCollection()
    createStringTotal()
}

export {
    Check 
}