/**@jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { forwardRef, Fragment } from 'react'
import { useFormControl } from './FormControl'

export const RequiredIndicator = props => {
  return (
    <span
      aria-hidden="true"
      children="*"
      sx={{ variant: 'forms.requiredIndicator', ...props }}
    />
  )
}

export const OptionalIndicator = props => {
  return (
    <span
      children="Optional"
      aria-hidden="true"
      sx={{ variant: 'forms.optionalIndicator', fontStyle: 'italic' }}
      {...props}
    />
  )
}

const Label = forwardRef(({ children, ...props }) => {
  const formControl = useFormControl(props)
  const L = (
    <Box as="label">
      {children}
      {formControl.isRequired && <RequiredIndicator ml={1} />}
    </Box>
  )
  return formControl.optional ? (
    <Flex justifyItems="space-between">
      {L}
      <OptionalIndicator />
    </Flex>
  ) : (
    L
  )
}, ref)

export default Label
