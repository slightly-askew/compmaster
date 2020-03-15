/**@jsx jsx */
import { jsx } from 'theme-ui'
import { NextPage } from 'next'
import { useState, useContext, forwardRef } from 'react'
import { motion } from 'framer-motion'

interface Props {}

export const useFormControl = (props: any) => {
  const context = useFormControlContext()
  if (!context) {
    return props
  }
  const keys = Object.keys(context)
  return keys.reduce((acc: any, prop: any) => {
    /** Giving precedence to `props` over `context` */
    acc[prop] = props[prop]

    if (context) {
      if (props[prop] == null) {
        acc[prop] = context[prop]
      }
    }

    return acc
  }, {})
}

const FormControlContext = createContext()

export const useFormControlContext = () => {
  const context = useContext(FormControlContext)
  return context
}

const FormControl = forwardRef(
  ({ isInvalid, isRequired, isDisabled, isReadOnly,name, ...rest }, ref) => {
    const [isActive, setIsActive] = useState(false)
    const context = {
      isRequired,
      isDisabled,
      isInvalid,
      isReadOnly,
      optional,
      name,
      errorId: name && `${name}Error`
    }

    return (
      <FormControlContext.Provider value={context}>
        <motion.div
          role="group"
          ref={ref}
          variants={animationStates}
          {...rest}}
        />
      </FormControlContext.Provider>
    )
  }
)

const animationStates = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export default FormControl
