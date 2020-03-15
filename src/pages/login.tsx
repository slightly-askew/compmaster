/**@jsx jsx */
import { NextPage } from 'next'
import { jsx, Flex, Box } from 'theme-ui'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

interface LoginProps {}

const Login: NextPage<LoginProps> = props => {
  return (
    <>
      <Header />
      <Flex sx={{ pt: 9, justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={FormBox}>
          <LoginForm />
        </Box>
      </Flex>
    </>
  )
}

const FormBox = {
  background: 'white',
  boxShadow: 'high',
  /*
  boxShadow: (theme: any) =>
    `1px 6px 48px ${theme.colors.shadow.dark['50']}, 1px 8px 30px ${theme.colors.shadow.dark['80']}, 0px 3px 10px ${theme.colors.shadow.primary}`,
    */
  py: 7,
  px: 9,
  borderRadius: 3,
}

export default Login
