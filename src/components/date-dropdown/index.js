import { DateDropdown } from './Date-dropdown'

new DateDropdown('js-date-dropdown-one', false, new Date('5 October, 2020'), undefined)
new DateDropdown('js-date-dropdown-two', false, undefined, undefined)
new DateDropdown('js-date-dropdown-three', false, new Date('5 October, 2020'), new Date('10 October, 2020'))
new DateDropdown('js-date-dropdown-four', true, new Date('5 October, 2020'), new Date('10 October, 2020'))
new DateDropdown('js-date-dropdown-five', false, undefined, undefined)
new DateDropdown('js-date-dropdown-six', false, new Date('5 October, 2020'), new Date('10 October, 2020'))