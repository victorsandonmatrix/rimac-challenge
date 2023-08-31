import { FC } from 'react'
import Image from 'next/image'

import { Checkbox } from '../Checkbox/Checkbox'

import { Container } from './styles'

interface Props {
  iconSrc: string
  title: string
  text: string
  isActive: boolean
  onClick: () => void
}

export const ForCard: FC<Props> = ({
  iconSrc,
  title,
  text,
  isActive,
  onClick,
}) => {
  return (
    <Container $isActive={isActive} onClick={onClick}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Checkbox
          isActive={isActive}
          size="normal"
          type="rounded"
          activeColor="green"
        />
      </div>

      <div className="forcard_title">
        <Image src={iconSrc} alt="ForWhoIcon" width={32} height={32} />

        <p>{title}</p>
      </div>

      <p className="forcard_p">{text}</p>
    </Container>
  )
}
