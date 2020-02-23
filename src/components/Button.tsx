/** @jsx jsx */
import { jsx, Button as ThemeButton } from 'theme-ui'
import { NextPage } from 'next'

interface ButtonProps {
  typography?: { [key: string]: any }
  variant?: string
  sx?: { [key: string]: any }
  [key: string]: any
}

const Button: NextPage<ButtonProps> = ({
  variant,
  typography,
  children,
  ...props
}) => {
  return (
    <ThemeButton variant={variant || 'primary'} {...props}>
      {typography ? <span {...typography}>{children}</span> : children}
    </ThemeButton>
  )
}

export default Button
