import './room-details.scss'

import { Header } from '../../components/header/header'
import '../../components/intelligence/intelligence'
import '../../components/impression/impression'
import { Comment } from '../../components/comment/comment'
import '../../components/bullet-list/bullet-list'
import '../../components/cancel/cancel'
import { Check } from '../../components/check/check'
import { Footer } from '../../components/footer/footer'

function RoomDetails () {
    const prace = 9990
    const date = {
        entry: new Date('06 01, 2020'),
        check_out: new Date('06 06, 2020')
    }
    const guests = [2, 1, 0]
    const discount = 2179
    const collection = 300
    Header()
    Comment()
    Check(prace, date, guests, discount, collection)
    Footer()
}

export {
    RoomDetails
}