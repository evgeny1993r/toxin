class Header {
  constructor(header) {
    this.$header = $(header);
    this.$header.each((_, el) => {
      const $headerLink = $(el).find('.js-header__link');
      $headerLink.on('click', (e) => {
        $headerLink.removeClass('header__link_active');
        $(e.currentTarget).addClass('header__link_active');
      });
    });
  }
}

export {
  Header,
};
