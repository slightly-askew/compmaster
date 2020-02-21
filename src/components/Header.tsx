/** @jsx jsx */
import { jsx, Flex, Box, Container, Button } from 'theme-ui'

import Link from 'next/link'
import { NextPage } from 'next'

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

interface HeaderProps {}

const Header: NextPage<HeaderProps> = props => {
  return (
    <Box
      as="header"
      {...props}
      sx={{ ...background, variant: 'layout.header' }}
    >
      <Container>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <div></div>
          <div></div>
          <div sx={{ fontSize: '1rem' }}>Hello from the header</div>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
