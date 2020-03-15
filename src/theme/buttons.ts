const defaults = {
  borderRadius: 2,
  px: 5,
  py: 2,
  fontSize: 0,
  fontFamily: 'body',
  textTransform: 'uppercase',
  fontWeight: '600',
  letterSpacing: '0.05em',
  lineHeight: '1.5rem',
  transition: 'background-color 0.1s',
}

export default {
  primary: {
    ...defaults,
    bg: 'primary.90',
    color: 'invertedText.10',
    boxShadow: '20',
    '&:hover': {
      bg: 'allPrimary.80',
      color: 'invertedText.0',
    },
  },
  ghost: {
    ...defaults,
    textTransform: 'normal',
    letterSpacing: '0',
    bg: 'transparent',
    color: 'allPrimaryShades.40',
    fontWeight: '400',
    '&:hover': {
      bg: 'allPrimaryShades.190',
      color: 'allPrimaryShades.20',
    },
  },
}
