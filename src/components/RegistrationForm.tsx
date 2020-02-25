/**@jsx jsx */
import { NextPage } from 'next'
import { jsx, Input, Label } from 'theme-ui'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import dayjs, * as Day from 'dayjs'
//
import MaskedInput from 'react-text-mask'
import * as Yup from 'yup'

const MINIMUM_REGISTRATION_AGE = 12
const MAXIMUM_REGISTRATION_AGE = 150

interface RegFormProps {}

const mobileMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
]

const initialValues = {
  name: '',
  mobile: '',
  email: '',
  dob: '',
  password: '',
  passwordConfirmation: '',
}

const regFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('')
    .min(2, 'Please enter your full name')
    .max(
      70,
      `That's a long name, can you shorten it to something less formal?`
    ),
  mobile: Yup.string()
    .required(`Please enter a telephone number`)
    .min(9, 'Please enter a full telephone number')
    .max(13, 'The telephone number you entered seems too long.')
    .matches(/^[0|1]\d*$/, 'Please enter only digits, starting with 0 or 1'),
  email: Yup.string()
    .email(`Please enter a valid email`)
    .required(`Please enter your email`),
  dob: Yup.date()
    .required('Please enter your date of birth')
    .min(
      dayjs()
        .subtract(MINIMUM_REGISTRATION_AGE, 'year')
        .toISOString(),
      `You need to be over the age of ${MINIMUM_REGISTRATION_AGE}yrs old to register. A parent or guardian will be able to register on your behalf`
    )
    .max(
      dayjs()
        .subtract(MAXIMUM_REGISTRATION_AGE, 'year')
        .toISOString(),
      `Date of Birth entered is too old`
    ),
  password: Yup.string()
    .required('Please choose a password')
    .min(8, 'Please enter a minimum of 8 characters for your password'),
  passwordConfirmation: Yup.string()
    .required('Please re-enter your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

type Registration = Yup.InferType<typeof regFormSchema>

const RegistrationForm: NextPage<RegFormProps> = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={regFormSchema}
      onSubmit={() => {}}
      //handleSubmit={e => e.preventDefault()}
    >
      {({ values, errors, touched, setFieldValue, isValid }) => {
        return (
          <Form name="registration-form">
            <Field name="name">
              {({ field }) => {
                return (
                  <>
                    <label>My label</label>
                    <Input></Input>
                  </>
                )
              }}
            </Field>
          </Form>
        )
      }}
    </Formik>
  )
}
