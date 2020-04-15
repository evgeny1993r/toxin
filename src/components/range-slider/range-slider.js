import './range-slider.scss'
import 'jquery-range/jquery.range'
import 'jquery-range/jquery.range.css'

$(document).ready(() => {
    const $range_slider_value = $('.range-slider__value')
    const $range_slider_input = $('.range-slider__input')
    $range_slider_input.jRange({
        from: 0,
        to: 15000,
        width: 266,
        isRange: true,
        showLabels: false,
        scale: [],
        onstatechange() {
            const value = $range_slider_input.val()
            let value_one = value.split(',')[0]
            value_one = createValue(value_one)
            let value_two = value.split(',')[1]
            value_two = createValue(value_two)
            const new_value = `${value_one}₽ - ${value_two}₽`
            $range_slider_value.text(new_value)

            function createValue(value) {
                if(value.length < 4) {
                    return value
                } else if(value.length >= 4) {
                    let new_value = [...value].reverse()
                    new_value.splice(3, 0, ' ')
                    new_value.reverse()
                    return new_value.join('')
                }
            } 
        }
    })
    $range_slider_input.jRange('setValue', '5000,10000')
})