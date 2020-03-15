/**@jsx jsx */
import { NextPage } from 'next'
import { jsx } from 'theme-ui'
import { motion } from 'framer-motion'

interface Props {}

const FormBox: NextPage<Props> = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      {...props}
      sx={{
        variant: 'layout.backgrounds.b10',
        py: 7,
        px: 8,
        borderRadius: 3,
      }}
    >
      {children}
    </motion.div>
  )
}

export default FormBox
