'use client'
import Image from 'next/image'
import { FC, ReactNode, useEffect } from 'react'

import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'

import { Container } from './styles'
import { resetStorage } from '@/util/storage'

interface Props {
  children: ReactNode
}

export const LoginLayout: FC<Props> = ({ children }) => {
  useEffect(() => {
    resetStorage()
  }, [])
  return (
    <Container>
      <div className="login_body">
        <Header />

        <div className="login_children">{children}</div>
      </div>

      <Footer />

      <Image
        src="/blur-purple.svg"
        alt="Purple Blur"
        className="purple-blur"
        width={432}
        height={1088}
      />

      <Image
        src="/blur-green.svg"
        alt="Green Blur"
        className="green-blur"
        width={432}
        height={1088}
      />

      <Image
        src="/blur-purple-mini.svg"
        alt="Purple Blur"
        className="purple-blur__mini"
        width={256}
        height={640}
      />

      <Image
        src="/blur-green-mini.svg"
        alt="Green Blur"
        className="green-blur__mini"
        width={256}
        height={640}
      />
    </Container>
  )
}
