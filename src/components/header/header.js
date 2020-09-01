import './header.scss'

import '../buttons/buttons'

function Header () {
    const $header = $('.js-header')
    $header.each((idx, el) => {
        const $nav_link = $(el).find('.js-nav__link')
        $nav_link.on('click', (e) => {
            $nav_link.removeClass('nav__link_active')
            $(e.currentTarget).addClass('nav__link_active')
        })
    })
}

export {
    Header
}