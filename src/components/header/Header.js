class Header {
    constructor(header) {
        this.$header = $(header)
        this.$header.each((_, el) => {
            const $header_link = $(el).find('.js-header__link')
            $header_link.on('click', (e) => {
                $header_link.removeClass('header__link_active')
                $(e.currentTarget).addClass('header__link_active')
            })
        })
    }
}

export {
    Header
}