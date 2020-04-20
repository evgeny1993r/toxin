import './number-search.scss'

import { DateDropdown } from '../date-dropdown/date-dropdown'
import { DropdownGuests } from '../dropdown-guests/dropdown-guests'
import '../buttons/buttons'

$(document).ready(() => {
    DateDropdown()
    DropdownGuests(0, 0, 0)
})