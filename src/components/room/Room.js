class Room {
  constructor(room) {
    this.$room = $(room);
    this.$btnLeft = this.$room.find('.room__btn-left');
    this.$btnRight = this.$room.find('.room__btn-right');
    this.$images = this.$room.find('.room__images');
    this.$image = this.$room.find('.room__image');
    this.$circle = this.$room.find('.room__circle');
    this.width$images = 0;
    this.$image.each((_, el) => {
      this.width$images -= $(el).width();
    });
    this.WIDTH_$IMAGE = this.$image.width();
    this.translateValue = 0;

    this.$btnLeft.on('click', () => this.handleBtnLeftClick());

    this.$btnRight.on('click', () => this.handleBtnRightClick());
  }

  handleBtnLeftClick() {
    if (this.translateValue >= 0) return;
    this.translateValue += this.WIDTH_$IMAGE;
    this.$images.css({ transform: `translateX(${this.translateValue}px)` });

    let newIdx = 0;

    this.$circle.each((idx, el) => {
      if ($(el).hasClass('room__circle_active')) {
        $(el).removeClass('room__circle_active');
        newIdx = idx - 1;
      }
    });

    $(this.$circle[newIdx]).addClass('room__circle_active');
  }

  handleBtnRightClick() {
    if (this.translateValue <= this.width$images + this.WIDTH_$IMAGE) return;
    this.translateValue -= this.WIDTH_$IMAGE;
    this.$images.css({ transform: `translateX(${this.translateValue}px)` });

    let newIdx = 0;

    this.$circle.each((idx, el) => {
      if ($(el).hasClass('room__circle_active')) {
        $(el).removeClass('room__circle_active');
        newIdx = idx + 1;
      }
    });

    $(this.$circle[newIdx]).addClass('room__circle_active');
  }
}

export {
  Room,
};
