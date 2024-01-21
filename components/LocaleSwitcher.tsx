'use client'
import { useState, Fragment } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import Button from '@mui/material/Button'

export default function LocaleSwitcher() {
  const pathName: string = usePathname()
  const router = useRouter()
  const [languages] = useState([
    {
      key: 'en',
      flag: 'us',
      name: 'English'
    },
    {
      key: 'vi',
      flag: 'vn',
      name: 'Vietnamese'
    }
  ])
  const [langSelected, setLangSelected] = useState(pathName.split('/')[1])

  const onChangeLocale = (locale: string) => {
    if (!pathName || locale === langSelected) return
    setLangSelected(locale)
    const segments: string[] = pathName.split('/')
    segments[1] = locale
    router.push(segments.join('/'))
  }

  return (
    <Fragment>
      {languages.map((i) => (
        <Button variant={langSelected === i.key ? 'contained' : 'text'} size='small' onClick={() => onChangeLocale(i.key)} key={i.key}>
          <aside className={['lang-flag', i.flag].join(' ')}></aside>
          {i.key}
        </Button>
      ))}
    </Fragment>
  )
}
