import type { AppRootState } from '@/interfaces/common.interface'
import dynamic from 'next/dynamic'
import Grid from '@mui/material/Unstable_Grid2'

const LocaleSwitcher = dynamic(() => import('@/components/LocaleSwitcher'))

const AuthLayout = ({ children }: Readonly<AppRootState>) => {
  return (
    <Grid container spacing={2}>
      <Grid xs={5}>
        <LocaleSwitcher />
      </Grid>
      <Grid xs={7}>{children}</Grid>
    </Grid>
  )
}

export default AuthLayout
