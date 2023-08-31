import { FC, useState } from 'react'
import Image from 'next/image'

import { Container } from './styles'

interface Props {
  text?: string
  isActive?: boolean
  type?: 'rounded' | 'square'
  size?: 'sm' | 'normal'
  activeColor?: 'black' | 'green'
}

export const Checkbox: FC<Props> = ({
  text,
  activeColor = 'black',
  size = 'sm',
  type = 'square',
  isActive,
}) => {
  const [isCheck, setIsCheck] = useState(true)
  const bgColor = activeColor === 'black' ? '#0A051E' : '#389E0D'
  const sourceImage = size === 'sm' ? '/gl-sm-check.svg' : '/gl_check.svg'

  return (
    <Container
      type={type}
      size={size}
      $activeColor={bgColor}
      $isCheck={isActive ?? isCheck}
      onClick={() => setIsCheck(!isCheck)}
    >
      <div className="checkbox_checkmark">
        <Image
          src={sourceImage}
          alt="Check"
          width={size === 'sm' ? 16 : 19.2}
          height={size === 'sm' ? 16 : 19.2}
          className="checkmark_icon"
        />
      </div>

      <p className="checkbox_text">{text}</p>
    </Container>
  )
}
