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
    bg: 'primary',
    color: 'invertedText.10',
    boxShadow: (theme: any) =>
      `2px 2px 8px ${theme.colors.shadow.primary}, 0px 2px 3px rgba(0, 0, 0, 0.08), inset 0px -4px 12px rgba(0, 0, 0, 0.12)`,
    '&:hover': {
      bg: 'primary_light',
      color: 'invertedText.0',
    },
  },
  ghost: {
    ...defaults,
    textTransform: 'normal',
    letterSpacing: '0',
    bg: 'transparent',
    color: 'defaultText.40',
    fontWeight: '400',
    '&:hover': {
      bg: 'rgba(32, 32, 32, 0.05)',
      color: 'defaultText.20',
    },
  },
}
