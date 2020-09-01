import './search-room.scss'

import { Header } from '../../components/header/header'
import { FilterDateDropdown } from '../../components/filter-date-dropdown/filter-date-dropdown'
import '../../components/dropdown-guests/dropdown-guests'
import '../../components/dropdown-guests/dropdown-guests.css'
import '../../components/range-slider/range-slider'
import '../../components/range-slider/range-slider.css'
import '../../components/range-slider/range-slider.scss'
import '../../components/checkbox-buttons/checkbox-buttons'
import '../../components/rich-checkbox-buttons/rich-checkbox-buttons'
import '../../components/dropdown-number/dropdown-number'
import '../../components/dropdown-number/dropdown-number.css'
import { ExpandableCheckboxList } from '../../components/expandable-checkbox-list/expandable-checkbox-list'
import { Room } from '../../components/room/room'
import { Pagination } from '../../components/pagination/pagination'
import { Footer } from '../../components/footer/footer'

$(document).ready(() => {
    Header()
    FilterDateDropdown('js-filter-date-dropdown', new Date('1 September, 2020'), new Date('4 September, 2020'))
    $('#dropdown-guests').dropdownGuests([2, 0, 1])
    $('#range-slider').slider({
        min_value: 0,
        max_value: 15000,
        interval: true,
        current_value_min: 5000,
        current_value_max: 10000,
        $input: $('#js-range-slider-input'),
        symbol: '₽'
    })
    $('#dropdown-number').dropdownNumber([2, 2, 0])
    ExpandableCheckboxList()
    Pagination('room', 'pagination__rooms-container', 'pagination__container', Room)
    Footer()
})