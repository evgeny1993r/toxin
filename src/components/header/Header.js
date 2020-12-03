class Header {
  constructor(header) {
    this.$header = $(header);
    this.$headerLink = this.$header.find('.js-header__link');

    this.$headerLink.on('click', (e) => {
      this.handleHeaderLinkClick(e);
    });
  }

  handleHeaderLinkClick(e) {
    this.$headerLink.removeClass('header__link_active');
    $(e.currentTarget).addClass('header__link_active');
  }
}

export {
  Header,
};
