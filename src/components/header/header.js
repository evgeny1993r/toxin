import './header.scss'

import '../buttons/buttons'

function Header () {
    const $link = $('.nav__link')
    $link.on('click', (e) => {
        $link.removeClass('nav__link_active')
        $(e.currentTarget).addClass('nav__link_active')
    })
}

export {
    Header
}