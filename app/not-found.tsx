import Page404Styles from '@/assets/css/modules/error.module.scss'
import Button from '@mui/material/Button'
import HouseIcon from '@mui/icons-material/House'

const NotFound = async () => {
  return (
    <article className={Page404Styles['page-404']}>
      <aside className={Page404Styles['page-404__image']}>
        <p className={Page404Styles['page-404__title']}>404</p>
      </aside>
      <h3 className='mt--0 mb--10px'>Look like you're lost</h3>
      <p className='mt--0 mb--10px'>the page you are looking for not available!</p>
      <aside>
        <Button variant='contained' startIcon={<HouseIcon />} href='/'>
          Home Page
        </Button>
      </aside>
    </article>
  )
}

export default NotFound
