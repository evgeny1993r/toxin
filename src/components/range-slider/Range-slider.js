import './range-slider-plugin/range-slider-plugin';

class RangeSlider {
  constructor(rangeSlider) {
    this.$rangeSlider = $(rangeSlider);
    this.$rangeSlider.slider({
      position: 'gorizontal',
      interval: true,
      min_value: 0,
      max_value: 15000,
      current_value_min: 5000,
      current_value_max: 10000,
      $input: $('.js-range-slider-input'),
      symbol: '₽',
    });
  }
}

export {
  RangeSlider,
};
