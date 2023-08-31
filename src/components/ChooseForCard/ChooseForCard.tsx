'use client'

import { FC } from 'react'
import { ForCard } from '../ForCard/ForCard'

import { Container } from './style'

const FIRST_CARD = 1
const SECOND_CARD = 2

interface Props {
  setChoosedCard: (val: number) => void
  choosedCard: number
}

export const ChooseForCard: FC<Props> = ({ setChoosedCard, choosedCard }) => {
  return (
    <Container>
      <ForCard
        onClick={() => setChoosedCard(FIRST_CARD)}
        isActive={choosedCard === FIRST_CARD}
        iconSrc="forme-light.svg"
        title="Para mí"
        text="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
      />

      <ForCard
        onClick={() => setChoosedCard(SECOND_CARD)}
        isActive={choosedCard === SECOND_CARD}
        iconSrc="forother-light.svg"
        title="Para alguien más"
        text="Realiza una cotización para uno de tus familiares o cualquier persona."
      />
    </Container>
  )
}
