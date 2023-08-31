import { FC } from 'react'
import Image from 'next/image'

import { Separator } from '../Separator/Separator'
import { Button } from '../Button/Button'
import { Tag } from '../Tag/Tag'

import { Container } from './styles'

interface Props {
  name: string
  price: number
  isRecommended: boolean
  description: string[]
  onClick: () => void
}

export const PlanCard: FC<Props> = ({
  name,
  price,
  onClick,
  description,
  isRecommended,
}) => {
  return (
    <Container onClick={onClick}>
      <div hidden={!isRecommended}>
        <Tag text="Plan recomendado" size="sm" />
      </div>

      <div className="plancard_header">
        <h3 className="plancard_title">{name}</h3>

        <Image src="IcHomeLight.svg" width={50} height={50} alt="Card Icon" />

        <div className="plancard_cost">
          <p className="plancard_cost_title">COSTO DEL PLAN</p>
          <p className="plancard_cost_amount">${price} al mes</p>
        </div>
      </div>

      <Separator color="#D7DBF5" />

      <ul className="plancard_list">
        {description.map((txt, i) => (
          <li className="plancard_item" key={'plancard-feat-key-' + i}>
            {txt}
          </li>
        ))}
      </ul>

      <Button bgColor="#FF1C44">
        <p className="plancard_button_text">Seleccionar plan</p>
      </Button>
    </Container>
  )
}
