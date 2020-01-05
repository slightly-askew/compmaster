/** @jsx jsx */
import { jsx } from 'theme-ui'

import Link from 'next/link'

const background = {
  width: '100%',
  height: '96px',
  overflow: 'visible',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(275deg, #061847 0%, rgb(29, 18, 105) 100%)',
  boxShadow:
    '0px 0px 24px 2px rgba(28, 28, 28, 0.3), 0px 1px 8px 0px rgba(16, 13, 63, 0.4)',
}

const menuItems = {
  ml: '2em',
  display: 'flex',
  listStyle: 'none',
}

const link = {
  fontFamily: 'Avenir',
  fontSize: '24px',
  color: 'white',
  textDecoration: 'none',
  cursor: 'pointer',
}

function Header(props) {
  return (
    <div {...props} sx={background}>
      <nav>
        <ul sx={menuItems}>
          <li>
            <Link href="/">
              <a sx={link}>Compmaster</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a sx={{ ...link, ml: '2em' }}>Leagues</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a sx={{ ...link, ml: '2em' }}>Teams</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a sx={{ ...link, ml: '2em' }}>Reports</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
