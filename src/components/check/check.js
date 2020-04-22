import './check.scss'

import { DateDropdown } from '../date-dropdown/date-dropdown'
import { DropdownGuests } from '../dropdown-guests/dropdown-guests'
import '../buttons/buttons'

function Check (price, date, guests, discount, collection) {

    // Функция, которая форматирует строку цены 
    function textFormatting (text) {
        const arr = String(text).split('')
        const arr_reverse = arr.reverse()
        const new_arr = arr_reverse.slice(0, 3).concat([' ']).concat(arr_reverse.slice(3, arr_reverse.length))
        const new_arr_reverse = new_arr.reverse()
        const new_text = new_arr_reverse.join('') + '₽'
        return new_text
    }

    // Добавление данных в DateDropdown, DropdownGuests
    const datepicker = DateDropdown(date.entry, date.check_out)
    DropdownGuests(guests[0], guests[1], guests[2])

    // Функция создания и монтирования данных
    function createCheck (entry, check_out) {
        const $price_accommodation_price_time = $('.js-price-accommodation__price-time')
        const new_price = textFormatting(price)
        const days = (check_out - entry) / 1000 / 60 / 60 / 24 
        const expression_price = `${new_price} x ${days} суток`
        $price_accommodation_price_time.text(expression_price)

        const $price_accommodation_total = $('.js-price-accommodation__total')
        const expression_total = textFormatting(price * days)
        $price_accommodation_total.text(expression_total)

        const $total_price = $('.js-total__price')
        $total_price.text(textFormatting((price * days) - discount + collection))
    }

    // Вызов функции createCheck по click на apply (datepicker)
    const $datepicker_apply = $('.js-datepicker__apply')
    $datepicker_apply.on('click', () => {
        createCheck(datepicker.selectedDates[0], datepicker.selectedDates[1])
    })

    createCheck(date.entry, date.check_out)
}

export {
    Check  
}