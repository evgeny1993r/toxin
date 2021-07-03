import { RangeSlider } from '../../libs/range-slider/RangeSlider';

const $rangeSlider = $('.js-range-slider__slider');
$rangeSlider.each((_, rangeSlider) => {
  new RangeSlider($(rangeSlider), {
    maxValue: 15000,
    currentValue: [5000, 10000],
    $inputElement: $('.js-range-slider__input'),
    symbol: '₽',
  });
});
