/** @jsx jsx */
import { jsx, Flex, Box, Container } from 'theme-ui'
import Button from '../components/Button'

import Link from 'next/link'
import { NextPage } from 'next'

interface HeaderProps {}

const Header: NextPage<HeaderProps> = props => {
  return (
    <Box as="header" {...props} sx={{ variant: 'layout.header' }}>
      <Container>
        <Flex>
          <div sx={{ ml: 'auto', variant: 'layout.button_row' }}>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
          </div>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
