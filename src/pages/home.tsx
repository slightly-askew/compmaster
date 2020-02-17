/** @jsx jsx */
import { jsx } from 'theme-ui'

import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

import { NextPage } from 'next'

const Home: NextPage<{}> = props => <div>Hello world in sans serif</div>

export default Home
