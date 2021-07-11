import { ProxyDatepicker } from '../../libs/datepicker';

const $datepicker = $('.js-datepicker');
$datepicker.each((_, datepicker) => {
  new ProxyDatepicker(datepicker);
});
