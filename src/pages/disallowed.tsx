/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'
import { NextPage } from 'next'
import FormBox from '@components/FormBox'

interface DashProps {}

const Dashboard: NextPage<DashProps> = () => {
  return (
    <>
      <Flex sx={{ pt: 9, justifyContent: 'center', alignItems: 'center' }}>
        <FormBox>
          <h1>Fuck off!</h1>
          <p>You don't have access.</p>
          <p>Something helpful should be here but it isn't.</p>
        </FormBox>
      </Flex>
    </>
  )
}

export default Dashboard
