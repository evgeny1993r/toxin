class Room {
  constructor(room) {
    this.$room = $(room);
    this.$btnLeft = this.$room.find('.js-room__btn-left');
    this.$btnRight = this.$room.find('.js-room__btn-right');
    this.$images = this.$room.find('.js-room__images');
    this.$image = this.$room.find('.js-room__image');
    this.$circle = this.$room.find('.js-room__circle');

    this.init();
  }

  init() {
    this.roomCircleClassActive = 'room__circle_active';
    this.width$images = 0;
    this.$image.each((_, el) => {
      this.width$images -= $(el).width();
    });
    this.widthImage = this.$image.width();
    this.translateValue = 0;

    this.$btnLeft.on('click', () => this.handleBtnLeftClick());
    this.$btnRight.on('click', () => this.handleBtnRightClick());
  }

  handleBtnLeftClick() {
    if (this.translateValue >= 0) return;
    this.translateValue += this.widthImage;
    this.$images.css({ transform: `translateX(${this.translateValue}px)` });

    let newIdx = 0;

    this.$circle.each((idx, el) => {
      if ($(el).hasClass(this.roomCircleClassActive)) {
        $(el).removeClass(this.roomCircleClassActive);
        newIdx = idx - 1;
      }
    });

    $(this.$circle[newIdx]).addClass(this.roomCircleClassActive);
  }

  handleBtnRightClick() {
    if (this.translateValue <= this.width$images + this.widthImage) return;
    this.translateValue -= this.widthImage;
    this.$images.css({ transform: `translateX(${this.translateValue}px)` });

    let newIdx = 0;

    this.$circle.each((idx, el) => {
      if ($(el).hasClass(this.roomCircleClassActive)) {
        $(el).removeClass(this.roomCircleClassActive);
        newIdx = idx + 1;
      }
    });

    $(this.$circle[newIdx]).addClass(this.roomCircleClassActive);
  }
}

export {
  Room,
};
