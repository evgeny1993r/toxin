import slider from './range-slider-plugin/range-slider-plugin';
import './range-slider-plugin/range-slider-plugin.css';

class RangeSlider {
  constructor($slider, options) {
    this.slider = slider;
    this.$slider = $slider;
    this.options = options;
    this.init();
  }

  init() {
    this.$slider.slider(this.options);
  }
}

export {
  RangeSlider,
};
