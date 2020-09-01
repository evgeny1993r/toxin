import './room-details.scss'

import { Header } from '../../components/header/header'
import '../../components/intelligence/intelligence'
import '../../components/impression/impression'
import { Comment} from '../../components/comment/comment'
import '../../components/bullet-list/bullet-list'
import '../../components/cancel/cancel'
import { Check } from '../../components/check/check'
import { Footer } from '../../components/footer/footer'

$(document).ready(() => {
    Header()
    Comment()
    Check(
        'js-date-dropdown', false, new Date('1 September, 2020'), new Date('5 September, 2020'), 
        'js-dropdown-guests', [2, 1, 0], 
        9990, 2179, 300
    )
    Footer()
})