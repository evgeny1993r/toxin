import { Header } from '../../components/header/header'
import { SearchNumber } from '../../components/search-number/search-number'
import { Footer } from '../../components/footer/footer'

import './landing-page.scss'

$(document).ready(() => {
    Header()
    SearchNumber('js-date-dropdown', false, 'js-dropdown-guests', [0, 0, 0])
    Footer()
})