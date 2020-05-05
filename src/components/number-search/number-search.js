import './number-search.scss'

import { DateDropdown } from '../date-dropdown/date-dropdown'
import { DropdownGuests } from '../dropdown-guests/dropdown-guests'
import '../buttons/buttons'

function NumberSearch () {
    DateDropdown()
    DropdownGuests(0, 0, 0)    
}

export {
    NumberSearch
}