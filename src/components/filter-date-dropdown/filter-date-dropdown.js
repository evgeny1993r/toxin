import './filter-date-dropdown.scss'
import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.min.css'
import '../../styles/datepicker.scss'

function FilterDateDropdown(id, oneDate, twoDate) {
    // Объявления переменных
    const $datepicker = $(`#${id}`)
    const $filterDateDropdownInput = $datepicker.siblings('.js-filter-date-dropdown__input')
    const icon = `<i class="icon-expand_more"></i>`

    // Создание datepicker
    $datepicker.datepicker({
        classes: 'datepicker-filter-date-dropdown',
        navTitles: {
            days: 'MM <i>yyyy</i>'
        },
        nextHtml: `
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/>
            </svg>
        `,
        prevHtml: `
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/>
            </svg>
        `,
        offset: 7,
        clearButton: true,
        range: true,
        dateFormat: 'd M',
        multipleDatesSeparator: ' - ',
        onSelect(fd, date, inst) {
            if(fd === '') {
                $filterDateDropdownInput.html(`ДД.ММ - ДД.ММ ${icon}`)  
            } else {
                $filterDateDropdownInput.html(`${fd} ${icon}`)                
            }
        }
    }).data('datepicker').selectDate([oneDate, twoDate])
    $datepicker.hide()

    $filterDateDropdownInput.on('click', () => {
        $datepicker.show()
    })

    $(document).on('click', (e) => {
        if($(e.target).attr('class') === undefined) {
            $datepicker.hide()
        } else {
            if($(`.${$(e.target).attr('class').split(' ')[0]}`).parents('.filter-date-dropdown').length === 0) {
                $datepicker.hide()
            }
        }
    })

    // Создание и добавление кнопки Применить
    const $datepickerButtons = $datepicker.find('.datepicker--buttons')
    const buttonApply = $('<span>', {
        class: 'datepicker--button',
        text: 'Применить',
        'data-action': 'hide',
        on: {
            click: () => $datepicker.hide()
        }
    })
    $datepickerButtons.append(buttonApply)
}

export {
    FilterDateDropdown
}