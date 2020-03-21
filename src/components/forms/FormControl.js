/**@jsx jsx */
import { jsx } from 'theme-ui'
import { NextPage } from 'next'
import { useState, useContext, forwardRef, createContext } from 'react'
import { motion } from 'framer-motion'

export const useFormControl = props => {
  const context = useFormControlContext()
  if (!context) {
    return props
  }
  const keys = Object.keys(context)
  return keys.reduce((acc, prop) => {
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

const FormControlContext = createContext({})

export const useFormControlContext = () => {
  const context = useContext(FormControlContext)
  return context
}

const FormControl = forwardRef(
  (
    { isInvalid, isRequired, isDisabled, isReadOnly, name, optional, ...rest },
    ref
  ) => {
    const [isActive, setIsActive] = useState(false)
    const context = {
      isRequired,
      isDisabled,
      isInvalid,
      isReadOnly,
      optional,
      name,
      errorId: name && `${name}Error`,
    }

    return (
      <FormControlContext.Provider value={context}>
        <motion.div
          role="group"
          ref={ref}
          variants={animationStates}
          initial="hidden"
          animate="show"
          exit="hidden"
          positionTransition
          {...rest}
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
