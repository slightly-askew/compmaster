const theme = {
  colors: {
    background:
      'radial-gradient(62.92% 161.07% at 16.11% 37.28%, #3F2264 0%, #302F57 100%)',
    primary: '1E88EA',
    shadow: {
      primary: 'rgba(7, 112, 235, 0.16)',
    },
    primary_dark: '0770EB',
    base: {
      '0': '#FFFFFF',
      '10': '#FAFAFA',
      '20': '#EBEBEB',
      '30': '#E0E0E0',
      '40': '#9A9A9A',
      '50': '#2E2E2E',
      '60': '#0F0F0F',
      '100': '#000000',
    },
    defaultText: {
      '0': '#000000',
      '10': 'rgba(5, 5, 5, 0.95)',
      '20': 'rgba(10, 10, 10, 0.90)',
      '30': 'rgba(15, 15, 15, 0.85)',
      '40': 'rgba(20, 20, 20, 0.80)',
      '50': 'rgba(26, 26, 26, 0.75)',
      '60': 'rgba(31, 31, 31, 0.70)',
      '70': 'rgba(36, 36, 36, 0.65)',
      '80': 'rgba(41, 41, 41, 0.60)',
      '90': 'rgba(46, 46, 46, 0.55)',
    },
    invertedText: {
      '0': '#FFFFFF',
      '10': 'rgba(250, 250, 250, 0.95)',
      '20': 'rgba(245, 245, 245, 0.90)',
      '30': 'rgba(240, 240, 240, 0.85)',
      '40': 'rgba(235, 235, 235, 0.80)',
      '50': 'rgba(230, 230, 230, 0.75)',
      '60': 'rgba(224, 224, 224, 0.70)',
      '70': 'rgba(219, 219, 219, 0.65)',
      '80': 'rgba(214, 214, 214, 0.60)',
      '90': 'rgba(209, 209, 209, 0.55)',
    },
  },
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
  radii: ['0px', '0.25rem', '0.5rem', '0.75rem', '1rem'],
  space: [
    '0px',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
    '6rem',
    '9rem',
  ],
  shadows: {
    elevation3:
      '3px 3px 48px rgba(0, 0, 0, 0.04), 2px 5px 30px rgba(0, 0, 0, 0.06)',
  },
  fonts: {
    body: '"Euclid Circular B Trial",system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
  },
  layout: {
    header: {
      backgroundColor: 'base.0',
      color: 'defaultText.30',
    },
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
  buttons: {
    primary: {
      bg: 'primary',
      color: 'invertedText',
      borderRadius: 2,
      px: '5',
      py: '2',
      fontSize: 0,
      boxShadow: (theme: any) =>
        `2px 2px 8px ${theme.colors.shadow.primary_dark}, 0px 2px 3px rgba(0, 0, 0, 0.08), inset 0px -4px 12px rgba(0, 0, 0, 0.12)`,
    },
  },
  // Body styles
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      backgroundColor: '#F5F8FA',
      '& button': {
        display: 'inline-block',
        border: 'none',
        margin: 0,
        textDecoration: 'none',
        fontSize: 1,
        cursor: 'pointer',
        textAlign: 'center',
        '-webkitAppearance': 'none',
        '-mozAppearance': 'none',
        background: 'none',
        '&::-moz-focus-inner': {
          border: '0 !important',
        },
      },
      //backgroundImage: 'radial-gradient(62.92% 161.07% at 16.11% 37.28%, #3F2264 0%, #302F57 100%)',
    },
  },
}

export default theme
