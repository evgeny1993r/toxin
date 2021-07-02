class Header {
  constructor(header) {
    this.$header = $(header);
    this.$headerLink = this.$header.find('.js-header__link');
    this.headerLinkClassActive = 'header__link_active';

    this.$headerLink.on('click', (e) => this.handleHeaderLinkClick(e));
  }

  handleHeaderLinkClick(e) {
    this.$headerLink.removeClass();
    $(e.currentTarget).addClass(this.headerLinkClassActive);
  }
}

export {
  Header,
};
