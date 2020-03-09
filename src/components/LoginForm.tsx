/**@jsx jsx */
import { NextPage } from 'next'
import { jsx, Input, Label, Flex, Box } from 'theme-ui'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Button from './Button'
//import MaskedInput from 'react-text-mask'
import * as Yup from 'yup'

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

type Registration = Yup.InferType<typeof regFormSchema>
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
  /*  Validating a date of birth
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
    */
  password: Yup.string()
    .required('Please choose a password')
    .min(8, 'Please enter a minimum of 8 characters for your password'),

  /*  Password confirmation
  passwordConfirmation: Yup.string()
    .required('Please re-enter your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    */
})

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
          <Box
            as={Form}
            sx={{
              fontSize: 0,
              width: '16rem',
              '& > *:not(:first-of-type)': { mt: 2 },
            }}
          >
            <Field name="name">
              {({ field }: { field: any }) => {
                return (
                  <div>
                    <Label sx={{ mb: 1 }}>Full Name</Label>
                    <Input {...field} sx={{ borderRadius: 1 }} />
                  </div>
                )
              }}
            </Field>
            <Field name="mobile">
              {({ field }: { field: any }) => {
                return (
                  <div>
                    <Label sx={{ mb: 1 }}>Mobile Number</Label>
                    <Input {...field} sx={{ borderRadius: 1 }} />
                  </div>
                )
              }}
            </Field>
            <Field name="email">
              {({ field }: { field: any }) => {
                return (
                  <div>
                    <Label sx={{ mb: 1 }}>Email</Label>
                    <Input {...field} sx={{ borderRadius: 1 }} />
                  </div>
                )
              }}
            </Field>
            <Field name="password">
              {({ field }: { field: any }) => {
                return (
                  <div>
                    <Label sx={{ mb: 1 }}>Password</Label>
                    <Input {...field} sx={{ borderRadius: 1 }} />
                  </div>
                )
              }}
            </Field>
            <Button variant="primary" sx={{ minWidth: '100%', mt: 5 }}>
              Sign Up
            </Button>
          </Box>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm
