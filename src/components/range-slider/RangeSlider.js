import './slider-plugin/slider-plugin';

class RangeSlider {
  constructor(rangeSlider) {
    this.$rangeSlider = $(rangeSlider);
    this.$rangeSlider.slider({
      maxValue: 15000,
      currentValue: [5000, 10000],
      $inputElement: $('.js-range-slider__input'),
      symbol: '₽',
    });
  }
}

export {
  RangeSlider,
};
