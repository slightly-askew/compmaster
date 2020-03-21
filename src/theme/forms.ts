const defaults = {
  borderRadius: 1,
  border: 'none',
}

export default {
  input: {
    ...defaults,
    bg: 'primaryAlpha.a190',
    color: 'primaryAlpha.a150',
  },
  errorMessage: {
    color: 'error.validationText',
    bg: 'error.validationBackground',
    mt: 1,
    borderRadius: 1,
    fontSize: 0,
    py: 1,
  },
  requiredIndicator: {
    color: 'error.e10',
  },
  optionalIndicator: {
    color: 'primaryAlpha.a80',
    fontSize: '0',
  },
  label: {
    color: 'primaryAlpha.a80',
    fontSize: '0',
    display: 'flex',
    justifyContent: 'space-between',
  },
}
