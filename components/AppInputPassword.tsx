'use client'

import type { MouseEvent } from 'react'
import { useState } from 'react'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

import LockIcon from '@mui/icons-material/Lock'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface InputPasswordProp {
  label: string
}

const AppInputPassword = (props: InputPasswordProp) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault()

  return (
    <Box display='flex' alignItems='flex-end'>
      {showPassword ? (
        <LockOpenIcon className='mr--7px grey--lighteen-1' fontSize='medium' />
      ) : (
        <LockIcon className='mr--7px grey--lighteen-1' fontSize='medium' />
      )}
      <TextField
        label={props.label}
        fullWidth
        size='small'
        variant='standard'
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} size='small'>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}

export default AppInputPassword
