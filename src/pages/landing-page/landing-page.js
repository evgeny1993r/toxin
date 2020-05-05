import './landing-page.scss'

import { Header } from '../../components/header/header'
import { NumberSearch } from '../../components/number-search/number-search'
import '../../components/footer/footer'

function LandingPage () {
    Header()
    NumberSearch()
}

export {
    LandingPage
}