import Image from 'next/image'
import { Container } from './styles'

export const Footer = () => {
  return (
    <Container>
      <Image src={'/logo-white.svg'} alt="Rimac" width={85.4} height={42} />

      <p>© 2023 RIMAC Seguros y Reaseguros.</p>
    </Container>
  )
}   