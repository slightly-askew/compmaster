/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/Header'

import { NextPage } from 'next'

const Home: NextPage<{}> = props => (
  <>
    <Header />
    <div>Hello world in sans serif</div>
  </>
)

export default Home
