/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'
import { NextPage } from 'next'
import Header from '../../components/Header'

interface DashProps {
  user: {
    name?: string
    email?: string
    mobile?: string
    token?: string
  }
}

const Dashboard: NextPage<DashProps> = ({
  user = {
    name: 'revilo',
    email: 'email',
    mobile: 'nah',
    token: 'get fucked',
  },
}) => {
  return (
    <>
      <Header />
      <Flex sx={{ pt: 9, justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={FormBox}>
          <h1>Hellooooo.</h1>
          <p>Your name is {user && user.name}</p>
          <p>Your email is {user && user.email}</p>
          <p>Your mobile is {user && user.mobile}</p>
          <p>Your fauna token is {user && user.token}</p>
          <p>I bet you're so pleased that you're here</p>
        </Box>
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

export default Dashboard
