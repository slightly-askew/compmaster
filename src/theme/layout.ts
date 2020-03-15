import { Flex } from 'theme-ui'

export default {
  header: {
    bg: 'background.b40',
    boxShadow: (theme: any) => theme._shadows.s20,
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
  backgrounds: {
    b0: {
      bg: 'background.b0',
    },
    b10: {
      boxShadow: (theme: any) => theme._shadows.s20,
      background: (theme: any) => theme.colors.background.b40,
    },
    b20: {
      bg: '',
      boxShadow: '',
    },
    b30: {
      bg: '',
      boxShadow: '',
    },
    b40: {
      bg: '',
      boxShadow: '',
    },
  },
  button_row: {
    display: 'flex',
    '& > *:not(:first-of-type)': {
      ml: 2,
    },
  },
  form: {
    input: {
      large: {
        primary: {
          default: {
            bg: 'defaultText.50',
            border: 'none',
          },
        },
      },
    },
  },
}
