'use client'
import { FC, ReactNode } from 'react'

import { Header } from '@/components/Header/Header'

import { Container } from './styles'

interface Props {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
