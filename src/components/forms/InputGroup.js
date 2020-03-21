/**@jsx jsx*/
import { jsx } from 'theme-ui'
import { NextPage } from 'next'

import FormControl from './FormControl'
import Input from './Input'
import Label from './Label'
import Error from './Error'
import { useField } from 'formik'

/*
interface Props {
  label: string
  name: string
  placeholder?: string
}
*/

const InputGroup = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  return (
    <FormControl {...props}>
      <Label>
        {label}
        <Input {...field}></Input>
      </Label>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </FormControl>
  )
}

export default InputGroup
