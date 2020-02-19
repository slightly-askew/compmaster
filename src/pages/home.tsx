/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'

import { NextPage } from 'next'

const Home: NextPage<{}> = props => (
  <>
    <Heading sx={{ height: '3em', background: 'white' }} />
    <div>Hello world in sans serif</div>
  </>
)

export default Home
