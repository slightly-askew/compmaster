export default {
  variant: 'layout.backgrounds.b0',
  fontSize: 1,
  fontFamily: 'body',
  fontWeight: 'body',
  //background: (theme: any) => theme.colors.background.b0,
  '& button': {
    display: 'inline-block',
    border: 'none',
    margin: 0,
    textDecoration: 'none',
    fontSize: 1,
    cursor: 'pointer',
    textAlign: 'center',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    background: 'none',
    '&::-moz-focus-inner': {
      border: '0 !important',
    },
  },
}
