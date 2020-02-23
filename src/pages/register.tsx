/**@jsx jsx */
import { NextPage } from 'next'
import { jsx, Flex, Box } from 'theme-ui'
import Header from '../components/Header'

interface LoginProps {}

const Login: NextPage<LoginProps> = props => {
  return (
    <>
      <Header />
      <Flex sx={{ pt: 9, justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={FormBox}>hello register</Box>
      </Flex>
    </>
  )
}

const FormBox = {
  background: 'white',
  boxShadow: 'elevation3',
  py: 7,
  px: 9,
  borderRadius: 2,
}

export default Login
