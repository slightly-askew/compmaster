export default {
  fontSize: 1,
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
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    background: 'none',
    '&::-moz-focus-inner': {
      border: '0 !important',
    },
  },
}
