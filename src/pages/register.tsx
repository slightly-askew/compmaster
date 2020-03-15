/**@jsx jsx */
import { NextPage } from 'next'
import { jsx, Flex } from 'theme-ui'
import RegistrationForm from '@components/RegistrationForm'
import FormBox from '@components/FormBox'

interface LoginProps {}

const Login: NextPage<LoginProps> = props => {
  return (
    <>
      <Flex sx={{ pt: 9, justifyContent: 'center', alignItems: 'center' }}>
        <FormBox>
          <RegistrationForm />
        </FormBox>
      </Flex>
    </>
  )
}

export default Login
