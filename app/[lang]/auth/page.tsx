import type { AppRootState } from '@/interfaces/common.interface'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'

import { getDictionary } from '@/get-dictionary'

const AppInput = dynamic(() => import('@/components/AppInput'))
const AppInputPassword = dynamic(() => import('@/components/AppInputPassword'))
import TextAnimationFlip from '@/components/TextAnimationFlip'

import LoginIcon from '@mui/icons-material/Login'
import AccountCircle from '@mui/icons-material/AccountCircle'

const AuthLoginPage = async ({ params: { lang } }: AppRootState) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const dict = await getDictionary(lang)

  return (
    <Grid container>
      <Grid
        className='min-height--100vh'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        rowGap={3}
        lg={6}
        lgOffset={3}
        md={8}
        mdOffset={2}
        xs={10}
        xsOffset={1}
      >
        <TextAnimationFlip text={dict['login.title']} />

        <AppInput label={dict['login.label.username']} iconName={<AccountCircle className='mr--5px grey--lighteen-1' fontSize='medium' />} />

        <AppInputPassword label={dict['app.label.password']} />

        <Button variant='contained' size='medium' className='mt--7px' startIcon={<LoginIcon />}>
          {dict['login.btn.login']}
        </Button>

        <aside className='text-right'>
          <Link className='app-link' href='/public'>
            {dict['login.text.forgotPassword']}
          </Link>
        </aside>

        <aside>
          If you don't have account,{' '}
          <Link href='/' className='app-link'>
            Register Here!
          </Link>
        </aside>
      </Grid>
    </Grid>
  )
}

export default AuthLoginPage
