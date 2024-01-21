import { FC } from 'react'

const TextAnimationFlip: FC<{ text: string }> = ({ text }) => {
  const renderItem = () => {
    const items = []
    for (let i = 0; i <= text.length; i++) {
      items.push(
        <aside className={['text-flip__item', `text-flip__item--${i + 1}`].join(' ')} key={i}>
          {text[i] ? text[i] : ''}
        </aside>
      )
    }
    return items
  }

  return <section className='text-flip'>{renderItem()}</section>
}

export default TextAnimationFlip
