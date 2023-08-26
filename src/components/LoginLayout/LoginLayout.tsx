import { FC, ReactNode } from 'react'

import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Container } from './styles'
import Image from 'next/image'

interface Props {
  children: ReactNode
}

export const LoginLayout: FC<Props> = ({ children }) => {
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
