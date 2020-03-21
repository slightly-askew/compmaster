/**@jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef } from 'react'

import { useFormControl } from './FormControl'

const Input = forwardRef((props, ref) => {
  const formControl = useFormControl(props)
  const {
    size,
    variant,
    as,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    isReadOnly,
    isFullWidth,
    isDisabled,
    isInvalid,
    isRequired,
    focusBorderColor,
    errorBorderColor,
    errorId,
    children,
    ...rest
  } = props
  return (
    <input
      ref={ref}
      as={as}
      readOnly={formControl.isReadOnly}
      aria-readonly={isReadOnly}
      disabled={formControl.isDisabled}
      aria-label={ariaLabel}
      aria-invalid={formControl.isInvalid}
      required={formControl.isRequired}
      aria-required={formControl.isRequired}
      aria-disabled={formControl.isDisabled}
      aria-describedby={isInvalid && errorId}
      {...inputStyleProps}
      sx={{
        bg: 'primaryAlpha.a160',
        ...rest,
      }}
      children={children}
    />
  )
})

export default Input
