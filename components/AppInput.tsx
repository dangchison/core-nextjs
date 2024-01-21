import type { ReactElement } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

interface InputProp {
  label: string
  iconName: ReactElement
}

const AppInput = (props: InputProp) => {
  return (
    <Box display='flex' alignItems='flex-end'>
      {props.iconName ? props.iconName : ''}
      <TextField label={props.label} fullWidth size='small' variant='standard' />
    </Box>
  )
}

export default AppInput
