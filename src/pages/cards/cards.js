import './cards.scss'

import '../../components/logo-gray/logo-gray'
import { SearchNumber } from '../../components/search-number/search-number'
import { SignUp } from '../../components/sign-up/sign-up'
import { Check } from '../../components/check/check'
import '../../components/sign-in/sign-in'
import { DateDropdown } from '../../components/date-dropdown/date-dropdown'
import { Room } from '../../components/room/room'

$(document).ready(() => {
    SearchNumber('js-date-dropdown', false, 'js-dropdown-guests', [0, 0, 0])
    SignUp('js-masked-text-field')
    Check('js-date-dropdown-two', false, new Date('20 September, 2020'), new Date('24 September, 2020'), 'js-dropdown-guests-two', [2, 1, 0], 9990, 2179, 300)
    DateDropdown('js-date-dropdown-four', true, new Date('20 September, 2020'), new Date('24 September, 2020'))
    Room()
})