/**@jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useFormControl } from './FormControl'
import { motion } from 'framer-motion'

const motionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const ErrorMessage = ({ children, ...props }) => {
  const formControls = useFormControl(props)
  return (
    <Box
      as={motion.span}
      id={formControls.errorId}
      variants={motionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      sx={{ mt: 1, variant: 'forms.errorMessage', ...props }}
    >
      {children}
    </Box>
  )
}

export default ErrorMessage
