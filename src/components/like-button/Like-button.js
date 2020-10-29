class LikeButton {
  constructor(likeButton) {
    this.$likeButton = $(likeButton);
    this.$icon = this.$likeButton.find('.js-like-button__icon');
    this.$likeButtonValue = this.$likeButton.find('.js-like-button__value');
    this.$likeButton.on('click', () => {
      this.onClickLikeButton();
    });
  }

  onClickLikeButton() {
    this.value = Number(this.$likeButtonValue.text());
    if (this.$likeButton.hasClass('like-button_active')) {
      this.$icon.removeClass('icon-like_button_active');
      this.$icon.addClass('icon-like_button_inActive');
      this.$likeButton.removeClass('like-button_active');
      this.$likeButtonValue.text(this.value - 1);
    } else {
      this.$icon.removeClass('icon-like_button_inActive');
      this.$icon.addClass('icon-like_button_active');
      this.$likeButton.addClass('like-button_active');
      this.$likeButtonValue.text(this.value + 1);
    }
  }
}

export {
  LikeButton,
};
