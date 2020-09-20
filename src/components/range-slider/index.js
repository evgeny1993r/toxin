import './range-slider'

const $rangeSliderOne = $('#js-range-slider-one')
$rangeSliderOne.slider({
    position: 'gorizontal',
    interval: true,
    min_value: 0,
    max_value: 15000,
    current_value_min: 5000,
    current_value_max: 10000,
    $input: $('#js-range-slider-input-one'),
    symbol: '₽'
})

const $rangeSliderTwo = $('#js-range-slider-two')
$rangeSliderTwo.slider({
    position: 'gorizontal',
    interval: true,
    min_value: 0,
    max_value: 15000,
    current_value_min: 5000,
    current_value_max: 10000,
    $input: $('#js-range-slider-input-two'),
    symbol: '₽'
})