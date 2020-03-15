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
  email: '',
  password: '',
}

type Registration = Yup.InferType<typeof regFormSchema>
const regFormSchema = Yup.object().shape({
  email: Yup.string()
    .email(`Please enter a valid email`)
    .required(`Please enter your email`),

  password: Yup.string()
    .required('Please choose a password')
    .min(8, 'Please enter a minimum of 8 characters for your password'),
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
              '& > *:not(:first-of-type)': { mt: 3 },
            }}
          >
            <Field name="email">
              {({ field }: { field: any }) => {
                return (
                  <div>
                    <Label sx={{ mb: 1, color: 'primaryAlpha.a60' }}>
                      Email
                    </Label>
                    <Input {...field} sx={{ borderRadius: 1, fontSize: 1 }} />
                  </div>
                )
              }}
            </Field>
            <Field name="password">
              {({ field }: { field: any }) => {
                return (
                  <div>
                    <Label sx={{ mb: 1, color: 'primaryAlpha.a60' }}>
                      Password
                    </Label>
                    <Input {...field} sx={{ borderRadius: 1, fontSize: 1 }} />
                  </div>
                )
              }}
            </Field>
            <Button variant="primary" sx={{ minWidth: '100%', mt: 5 }}>
              Login
            </Button>
          </Box>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm
