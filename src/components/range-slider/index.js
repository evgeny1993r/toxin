import { ProxyRangeSlider } from '../../libs/range-slider';

const $rangeSlider = $('.js-range-slider__slider');
$rangeSlider.each((_, rangeSlider) => {
  new ProxyRangeSlider(rangeSlider);
});
