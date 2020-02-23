/**@jsx jsx */
import { jsx, Input, Label } from 'theme-ui'
import {
  Formik,
  Field,
  Form as FormikForm,
  ErrorMessage as FormikError,
} from 'formik'

import MaskedInput from 'react-text-mask'
import * as Yup from 'yup'

const regFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('')
    .min(2, 'Please enter your full name')
    .max(
      70,
      `That's a long name, can you shorten it to something less formal?`
    ),
})

type Registration = Yup.InferType<typeof regFormSchema>
