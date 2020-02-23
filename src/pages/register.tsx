import { NextPage } from 'next'
import { Flex, Box } from 'theme-ui'
import Header from '../components/Header'

interface LoginProps {}

const Login: NextPage<LoginProps> = props => {
  return (
    <>
      <Header />
      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ background: 'white' }}></Box>
      </Flex>
    </>
  )
}

export default Login
