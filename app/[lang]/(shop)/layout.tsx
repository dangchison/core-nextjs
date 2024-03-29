import type { AppRootState } from '@/interfaces/common.interface'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

const AppBarSearch = dynamic(() => import('@/components/AppBarSearch'), { ssr: false })

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const ShopLayout = ({ children }: AppRootState) => {
  return (
    <Fragment>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton size='small' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <AppBarSearch />
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </Fragment>
  )
}

export default ShopLayout
