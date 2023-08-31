'use client'
import { FC } from 'react'

import { Container } from './styles'

interface Props {
  text: string
  size?: 'sm' | 'lg'
}

export const Tag: FC<Props> = ({ text, size }) => {
  return <Container $size={size}>{text}</Container>
}
