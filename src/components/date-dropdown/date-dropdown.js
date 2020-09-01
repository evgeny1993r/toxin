import './date-dropdown.scss'
import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.min.css'
import '../../styles/datepicker.scss'

function DateDropdown (id, isShow, oneDate, twoDate) {

    const $datepicker = $(`#${id}`)
    const $entry = $datepicker.parent('.js-date-dropdown').find('.js-date-dropdown__entry')
    const $entryInput = $entry.children('.js-date-dropdown__input')
    const $checkOut = $datepicker.parent('.js-date-dropdown').find('.js-date-dropdown__check-out')
    const $checkOutInput = $checkOut.children('.js-date-dropdown__input')

    $datepicker.datepicker({
        classes: 'datepicker-date-dropdown',
        navTitles: {
            days: 'MM <i>yyyy</i>'
        },
        nextHtml: `
            <svg class="datepicker--next-html" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/>
            </svg>
        `,
        prevHtml: `
            <svg class="datepicker--prev-html" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/>
            </svg>
        `,
        clearButton: true,
        range: true,
        minDate: new Date(),
        onSelect(fd, date, inst) {
            if(date.length === 0) {
                $entryInput.val(`ДД.ММ.ГГГГ`)
                $checkOutInput.val(`ДД.ММ.ГГГГ`)
            } else if(date.length === 1) {
                $entryInput.val(`${fd}`)
            } else if(date.length === 2) {
                $checkOutInput.val(fd.split(',')[1])
            }
        }
    }).data('datepicker').selectDate([oneDate, twoDate])

    if(!isShow) $datepicker.hide()
    
    $(document).on('click', (e) => {
        if(isShow) return 
        if($(e.target).attr('class') === undefined) {
            $datepicker.hide()
        } else {
            if($(`.${$(e.target).attr('class').split(' ')[0]}`).parents('.date-dropdown').length === 0) {
                $datepicker.hide()
            }
        } 
    })

    $entry.on('click', () => {
        $datepicker.show()
    })

    $checkOut.on('click', () => {
        $datepicker.show()
    })

    const $datepickerButtons = $datepicker.find('.datepicker--buttons')
    $datepickerButtons.append(
        $('<span>', {
            class: 'datepicker--button js-datepicker__apply',
            text: 'Применить',
            'data-action': 'hide',
            click: () => $datepicker.hide()
        })
    )

    return $datepicker.data('datepicker')

}

export {
    DateDropdown
}