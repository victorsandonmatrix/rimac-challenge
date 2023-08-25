import { FC } from 'react'

import { Container } from './styles'

interface Props {
  text: string
}

export const Tag: FC<Props> = ({ text }) => {
  return <Container>{text}</Container>
}
