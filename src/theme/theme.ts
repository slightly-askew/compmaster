import layout from './layout'
import buttons from './buttons'
import root from './root'
import colors from './colors'

const theme = {
  colors,
  sizes: {},
  fontWeights: {
    body: 400,
    bold: 700,
  },
  fontSizes: [
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.3125rem',
    '1.5rem',
    '1.6875rem',
    '2.25rem',
    '3rem',
  ],
  radii: ['0px', '4px', '8px', '12px', '16px'],
  space: [
    '0px',
    '4px',
    '8px',
    '12px',
    '16px',
    '24px',
    '32px',
    '48px',
    '64px',
    '96px',
    '144px',
  ],
  shadows: {
    elevation3:
      '3px 3px 48px rgba(0, 0, 0, 0.04), 2px 5px 30px rgba(0, 0, 0, 0.06)',
  },
  fonts: {
    body: '"Euclid Circular B Trial",system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
  },
  typography: {
    interface: {
      caps: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '2rem',
      },
    },
  },
  buttons,
  layout,
  styles: {
    // Body styles
    root,
  },
}

export default theme
