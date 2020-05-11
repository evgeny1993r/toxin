import './search-room.scss'

import { Header } from '../../components/header/header'
import { FilterDateDropdown } from '../../components/filter-date-dropdown/filter-date-dropdown'
import { DropdownGuests } from '../../components/dropdown-guests/dropdown-guests'
import { RangeSlider } from '../../components/range-slider/range-slider'
import '../../components/checkbox-buttons/checkbox-buttons'
import '../../components/rich-checkbox-buttons/rich-checkbox-buttons'
import { DropdownNumber } from '../../components/dropdown-number/dropdown-number'
import { ExpandableCheckboxList } from '../../components/expandable-checkbox-list/expandable-checkbox-list'
import { Pagination } from '../../components/pagination/pagination'
import { Footer } from '../../components/footer/footer'

function SearchRoom () {
    Header()
    FilterDateDropdown(new Date('6 1, 2020'), new Date('6 6, 2020'))
    DropdownGuests(2, 0, 1)
    RangeSlider()
    DropdownNumber(2, 2, 0)
    ExpandableCheckboxList()
    Pagination()
    Footer()
}

export {
    SearchRoom
}