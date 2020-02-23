import { Flex } from 'theme-ui'

export default {
  header: {
    background: 'white',
    boxShadow: 'elevation3',
    color: 'defaultText.30',
    display: 'flex',
    py: 2,
  },
  container: {
    maxWidth: '96rem',
    boxSizing: 'content-box',
    px: 5,
    mx: 'auto',
  },
  button_row: {
    display: 'flex',
    '& > *:not(:first-of-type)': {
      ml: 2,
    },
  },
}
