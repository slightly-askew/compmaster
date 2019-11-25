/** @jsx jsx */
import { jsx } from 'theme-ui'

import Header from './Header'

const backgroundStyle = {
  backgroundColor: '#E2E3E9',
  minHeight: '100vh',
  minWidth: '100%',
}

function Layout(props) {
  return (
    <div sx={backgroundStyle}>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
