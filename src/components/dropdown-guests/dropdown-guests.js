import './dropdown-guests.scss'

function DropdownGuests(adults, children, babies) {

    const $dropdown_guests = $('.js-dropdown-guests')
    const $label = $('.js-dropdown-guests__label')
    const $expression = $('.js-expression')
    const icon = `<i class="icon-expand_more"></i>`

    // Кнопки применить и очистить
    const $btn_apply = $('.js-btn-apply')
    const $btn_clear = $('.js-btn-clear')
    
    // Кнопки дикримент и инкримент
    const $item_btn_dic = $('.js-item__btn-dic')
    const $item_btn_inc = $('.js-item__btn-inc')

    // Элементы - количество гостей (взрослых, детей, младенцев)
    const $item_value_adults = $('.js-adults').find('.item__value')
    const $item_value_children = $('.js-children').find('.item__value')
    const $item_value_babies = $('.js-babies').find('.item__value')

    // Количество гостей (взсрослых, детей, младенцев)
    let number_adults = adults 
    let number_children = children
    let number_babies = babies 

    // Функция отображения данных в expression
    function expression_display () {
        const number_guests = number_adults + number_children + number_babies

        let expression = 'Сколько гостей'

        if(number_guests === 0) {
            $expression.html(expression + icon)
        } else if(number_guests === 1) {
            expression = `${number_guests} гость`
        } else if(number_guests >= 2 && number_guests <= 4) {
            expression = `${number_guests} гостя`
        } else if(number_guests >= 5) {
            expression = `${number_guests} гостей`
        }

        if(number_babies === 1) {
            expression = expression + `, ${number_babies} младенец`
        } else if(number_babies >= 2 && number_babies <= 4) {
            expression = expression + `, ${number_babies} младенца`
        } else if(number_babies >= 5) {
            expression = expression + `, ${number_babies} младенцев`
        }

        $expression.html(expression + icon)
    }

    // Открытие / закрытие dropdown-guests
    $expression.on('click', () => {
        $dropdown_guests.toggleClass('dropdown-guests_active')
    })
    $label.on('click', () => {
        $dropdown_guests.toggleClass('dropdown-guests_active')
    })
    
    // Закрытие dropdown-guests по click вне элемента
    $(document).on('click', (e) => {
        if($(e.target).parents('.dropdown-guests').length === 0) {
            $dropdown_guests.removeClass('dropdown-guests_active')
        }
    })

    // Дикримент 
    $item_btn_dic.on('click', (e) => {
        if($(e.target).parents('.item').hasClass('js-adults')) {
            if(number_adults === 0) return
            number_adults = number_adults - 1
            expression_display()
            $item_value_adults.text(number_adults)
        } else if($(e.target).parents('.item').hasClass('js-children')) {
            if(number_children === 0) return
            number_children = number_children - 1
            expression_display()
            $item_value_children.text(number_children)
        } else if($(e.target).parents('.item').hasClass('js-babies')) {
            if(number_babies === 0) return
            number_babies = number_babies - 1
            expression_display()
            $item_value_babies.text(number_babies)
        }
        button_clear_display()
    })

    // Инкримент
    $item_btn_inc.on('click', (e) => {
        if($(e.target).parents('.item').hasClass('js-adults')) {
            number_adults = number_adults + 1
            expression_display()
            $item_value_adults.text(number_adults)
        } else if($(e.target).parents('.item').hasClass('js-children')) {
            number_children = number_children + 1
            expression_display()
            $item_value_children.text(number_children)
        } else if($(e.target).parents('.item').hasClass('js-babies')) {
            number_babies = number_babies + 1
            expression_display()
            $item_value_babies.text(number_babies)
        }
        button_clear_display() 
    })
    
    // Apply 
    $btn_apply.on('click', () => {
        $dropdown_guests.removeClass('dropdown-guests_active')
    })
     
    // Clear
    $btn_clear.on('click', () => {
        number_adults = 0
        number_children = 0
        number_babies = 0

        $item_value_adults.text(number_adults)
        $item_value_children.text(number_children)
        $item_value_babies.text(number_babies)

        expression_display()

        $btn_clear.removeClass('btn-clear_active')
    })

    // Функция отображения кнопки Clear
    function button_clear_display () {
        if(number_adults !== 0 || number_children !== 0 || number_babies !== 0) {
            $btn_clear.addClass('btn-clear_active')
        } else {
            $btn_clear.removeClass('btn-clear_active')
        }
    }
    
    expression_display()

    // Отображение количества гостей в элементах
    $item_value_adults.text(number_adults)
    $item_value_children.text(number_children)
    $item_value_babies.text(number_babies)

    button_clear_display()
}

export {
    DropdownGuests
}