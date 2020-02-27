/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'
import { NextPage } from 'next'
import Header from '../components/Header'

interface DashProps {}

const Dashboard: NextPage<DashProps> = () => {
  return (
    <>
      <Header />
      <Flex sx={{ pt: 9, justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={FormBox}>
          <h1>Fuck off!</h1>
          <p>You don't have access.</p>
          <p>Something helpful should be here but it isn't.</p>
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
