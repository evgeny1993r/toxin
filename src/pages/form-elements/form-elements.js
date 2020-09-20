import './form-elements.scss'

import '../../components/logo-gray/logo-gray'
import '../../components/text-field/text-field'
import '../../components/dropdown-guests/dropdown-guests'
import '../../components/dropdown-guests/dropdown-guests.css'
import { MaskedTextField } from '../../components/masked-text-field/masked-text-field'
import { DateDropdown } from '../../components/date-dropdown/date-dropdown'
import { FilterDateDropdown } from '../../components/filter-date-dropdown/filter-date-dropdown'
import '../../components/subscription-text-field/subscription-text-field'
import '../../components/checkbox-buttons/checkbox-buttons'
import '../../components/radio-buttons/radio-buttons'
import '../../components/toggle/toggle'
import { LikeButton } from '../../components/like-button/like-button'
import '../../components/rate-button/rate-button'
import '../../components/range-slider/range-slider'
import '../../components/range-slider/range-slider.css'
import '../../components/range-slider/range-slider.scss'
import '../../components/buttons/buttons'
import { Pagination } from '../../components/pagination/pagination'
import '../../components/dropdown-number/dropdown-number'
import '../../components/dropdown-number/dropdown-number.css'
import { ExpandableCheckboxList } from '../../components/expandable-checkbox-list/expandable-checkbox-list'
import '../../components/rich-checkbox-buttons/rich-checkbox-buttons'
import '../../components/bullet-list/bullet-list'
import '../../components/intelligence/intelligence'
import '../../components/comment/comment'

$(document).ready(() => {
    const text_field = $('.text-field')
    const text_field_title_two = $('.text-field-container__title-two')
    text_field.on('mouseenter', () => {
        text_field_title_two.text('hover/focus')
    })    
    text_field.on('focus', () => {
        text_field_title_two.text('hover/focus')
    })
    text_field.on('mouseout', () => {
        if(text_field.is(':focus')) return 
        text_field_title_two.text('default')
    })    
    text_field.on('focusout', () => {
        text_field_title_two.text('default')
    })

    $('#dropdown-guests-one').dropdownGuests([0, 0, 0])

    MaskedTextField('js-masked-text-field')
    DateDropdown('js-date-dropdown', false)
    FilterDateDropdown('js-filter-date-dropdown', new Date('September 1, 2020'), new Date('September 5, 2020'))
    LikeButton()

    $('#js-range-slider').slider({
        min_value: 0,
        max_value: 15000,
        interval: true,
        current_value_min: 5000,
        current_value_max: 10000,
        $input: $('#js-range-slider-input'),
        symbol: '₽'
    })

    Pagination('pagination__item', 'js-pagination__container-items', 'js-pagination__container')

    const dropdown_number_one = $('#dropdown-number-one')
    dropdown_number_one.dropdownNumber([2, 2, 0])
    $(document).on('click', () => {
        if(dropdown_number_one.hasClass('dropdown-number_active')) {
            $('.dropdown-number-container-one__title-two').text('expended')
        } else {
            $('.dropdown-number-container-one__title-two').text('default')
        }
    })

    const dropdown_guests_two = $('#dropdown-guests-two')
    dropdown_guests_two.dropdownGuests([0, 0, 0])

    const dropdown_guests_three = $('#dropdown-guests-three')
    dropdown_guests_three.dropdownGuests([2, 1, 0])

    ExpandableCheckboxList()

})