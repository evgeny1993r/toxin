import './search-number.scss'

import '../dropdown-guests/dropdown-guests'
import '../dropdown-guests/dropdown-guests.css'
import { DateDropdown } from '../date-dropdown/date-dropdown'

function SearchNumber(dateDropdownId, dateDropdownIsShow, dropdownGuestsId, dropdownGuestsItems ) {
    DateDropdown(dateDropdownId, dateDropdownIsShow)
    $(`#${dropdownGuestsId}`).dropdownGuests([...dropdownGuestsItems])
}

export {
    SearchNumber
}
