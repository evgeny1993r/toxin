class LikeButton {
  constructor(likeButton) {
    this.$likeButton = $(likeButton);
    this.$icon = this.$likeButton.find('.js-like-button__icon');
    this.$likeButtonValue = this.$likeButton.find('.js-like-button__value');

    this.init();
  }

  init() {
    this.likeButtonClassActive = 'like-button_active';
    this.iconLikeButtonClassActive = 'icon-like_button_active';
    this.iconLikeButtonClassInActive = 'icon-like_button_inActive';

    this.$likeButton.on('click', () => this.handleLikeButton());
  }

  handleLikeButton() {
    this.value = Number(this.$likeButtonValue.text());
    if (this.$likeButton.hasClass(this.likeButtonClassActive)) {
      this.$icon.removeClass(this.iconLikeButtonClassActive);
      this.$icon.addClass(this.iconLikeButtonClassInActive);
      this.$likeButton.removeClass(this.likeButtonClassActive);
      this.$likeButtonValue.text(this.value - 1);
    } else {
      this.$icon.removeClass(this.iconLikeButtonClassInActive);
      this.$icon.addClass(this.iconLikeButtonClassActive);
      this.$likeButton.addClass(this.likeButtonClassActive);
      this.$likeButtonValue.text(this.value + 1);
    }
  }
}

export {
  LikeButton,
};
