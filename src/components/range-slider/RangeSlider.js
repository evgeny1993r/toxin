import slider from './range-slider-plugin/range-slider-plugin';
import './range-slider-plugin/range-slider-plugin.css';

class RangeSlider {
  constructor(rangeSlider) {
    this.$rangeSlider = $(rangeSlider);
    this.init();
  }

  init() {
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
