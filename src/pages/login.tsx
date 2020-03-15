/**@jsx jsx */
import { NextPage } from 'next'
import { jsx, Flex, Box } from 'theme-ui'
import LoginForm from '@components/LoginForm'
import FormBox from '@components/FormBox'

interface LoginProps {}

const Login: NextPage<LoginProps> = props => {
  return (
    <>
      <Flex sx={{ pt: 9, justifyContent: 'center', alignItems: 'center' }}>
        <FormBox>
          <LoginForm />
        </FormBox>
      </Flex>
    </>
  )
}

export default Login
