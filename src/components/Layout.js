/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from './Header'

function Layout(props) {
  return (
    <div sx={backgroundStyle}>
      <Header />
      {props.children}
    </div>
  )
}

const backgroundStyle = {
  backgroundColor: '#E2E3E9',
  minHeight: '100vh',
  minWidth: '100%',
}

export default Layout
