import './sign-up.scss'

import '../text-field/text-field'
import '../radio-buttons/radio-buttons'
import { MaskedTextField } from '../masked-text-field/masked-text-field'
import '../toggle/toggle'
import '../buttons/buttons'

function SignUp(idMaskedTextField) {
    MaskedTextField(idMaskedTextField)
}

export {
    SignUp
}
