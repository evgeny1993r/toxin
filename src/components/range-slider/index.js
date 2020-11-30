import { RangeSlider } from './Range-slider';

const $rangeSlider = $('.js-range-slider__slider');
$rangeSlider.each((_, rangeSlider) => {
  new RangeSlider(rangeSlider);
});
