import './subscription-text-field.scss'

$(document).ready(() => {
    const $subscription_text_field = $('.subscription-text-field')
    const $subscription_text_field_input = $('.subscription-text-field__input')
    $subscription_text_field_input.on('focus', () => {
        $subscription_text_field.addClass('subscription-text-field_active')
    })
    $subscription_text_field_input.on('blur', () => {
        $subscription_text_field.removeClass('subscription-text-field_active')
    })
})