import './registration.scss'

import { Header } from '../../components/header/header'
import { SignUp } from '../../components/sign-up/sign-up'
import { Footer } from '../../components/footer/footer'

$(document).ready(() => {
    Header()
    SignUp('js-masked-text-field')
    Footer()
})