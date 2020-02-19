/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import { NextPage } from 'next'

const Home: NextPage<{}> = props => (
  <>
    <Box
      sx={{ height: '4rem', background: 'white', boxShadow: 'elevation3' }}
      as="header"
    />
    <div>Hello world in sans serif</div>
    <button>I am a button</button>
  </>
)

export default Home
