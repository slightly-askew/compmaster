/**@jsx jsx */
import { jsx, Box } from 'theme-ui'
import formControl from './FormControl'
import { motion } from 'framer-motion'

const ErrorMessage = ({ children, errorId, ...props }) => {
  return (
    <Box
      as={motion.span}
      id={errorId}
      sx={{ mt: 1, variant: 'forms.errorMessage', ...props }}
    >
      {children}
    </Box>
  )
}
