import './dropdown-number.scss'

function DropdownNumber(bedrooms, beds, bathrooms) {

    const $dropdown_number = $('.js-dropdown-number')
    const $label = $dropdown_number.find('.js-label')
    const $expression = $dropdown_number.find('.js-expression')
    const icon = `<i class="icon-expand_more"></i>`
    
    // Кнопки дикримент и инкримент
    const $item_btn_dic = $('.js-item__btn-dic')
    const $item_btn_inc = $('.js-item__btn-inc')

    // Элементы - количество удобств (спальни, кровати, ванные комнаты)
    const $item_value_bedrooms = $('.js-bedrooms').find('.item__value')
    const $item_value_beds = $('.js-beds').find('.item__value')
    const $item_value_bathrooms = $('.js-bathrooms').find('.item__value')

    // Количество удобств (спальни, кровати, ваные комнаты)
    let number_bedrooms = bedrooms
    let number_beds = beds 
    let number_bathrooms = bathrooms 

    // Функция отображения данных в expression
    function expression_display () {
        let expression = ''

        if(number_bedrooms === 0) {
            expression = expression + `${number_bedrooms} спален, `
        } else if(number_bedrooms === 1) {
            expression = expression + `${number_bedrooms} спальня, `
        } else if(number_bedrooms >= 2 && number_bedrooms <= 4) {
            expression = expression + `${number_bedrooms} спальни, `
        } else if (number_bedrooms >= 5) {
            expression = expression + `${number_bedrooms} спален, `
        }

        if(number_beds === 0) {
            expression = expression + `${number_beds} кроватей...`
        } else if(number_beds === 1) {
            expression = expression + `${number_beds} кровать...`
        } else if(number_beds >= 2 && number_beds <= 4) {
            expression = expression + `${number_beds} кровати...`
        } else if(number_beds >= 5) {
            expression = expression + `${number_beds} кроватей...`    
        }
        
        $expression.html(expression + icon)
    }

    // Открытие / закрытие dropdown-number
    $expression.on('click', () => {
        $dropdown_number.addClass('dropdown-number_active')
    })
    $label.on('click', () => {
        $dropdown_number.addClass('dropdown-number_active')
    })
    
    // Закрытие dropdown-number по click вне элемента
    $(document).on('click', (e) => {
        if($(e.target).parents('.dropdown-number').length === 0) {
            $dropdown_number.removeClass('dropdown-number_active')
        }
    })

    // Дикримент 
    $item_btn_dic.on('click', (e) => {
        if($(e.target).parents('.item').hasClass('js-bedrooms')) {
            if(number_bedrooms === 0) return
            number_bedrooms = number_bedrooms - 1
            expression_display()
            $item_value_bedrooms.text(number_bedrooms)
        } else if($(e.target).parents('.item').hasClass('js-beds')) {
            if(number_beds === 0) return
            number_beds = number_beds - 1
            expression_display()
            $item_value_beds.text(number_beds)
        } else if($(e.target).parents('.item').hasClass('js-bathrooms')) {
            if(number_bathrooms === 0) return
            number_bathrooms = number_bathrooms - 1
            expression_display()
            $item_value_bathrooms.text(number_bathrooms)
        }
    })

    // Инкримент
    $item_btn_inc.on('click', (e) => {
        if($(e.target).parents('.item').hasClass('js-bedrooms')) {
            number_bedrooms = number_bedrooms + 1
            expression_display()
            $item_value_bedrooms.text(number_bedrooms)
        } else if($(e.target).parents('.item').hasClass('js-beds')) {
            number_beds = number_beds + 1
            expression_display()
            $item_value_beds.text(number_beds)
        } else if($(e.target).parents('.item').hasClass('js-bathrooms')) {
            number_bathrooms = number_bathrooms + 1
            expression_display()
            $item_value_bathrooms.text(number_bathrooms)
        }
    })
    
    expression_display()

    // Отображение количества удобств в элементах
    $item_value_bedrooms.text(number_bedrooms)
    $item_value_beds.text(number_beds)
    $item_value_bathrooms.text(number_bathrooms)
}

export {
    DropdownNumber
}