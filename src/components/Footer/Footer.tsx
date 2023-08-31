import Image from 'next/image'
import { Separator } from '../Separator/Separator'

import { Container } from './styles'

export const Footer = () => {
  return (
    <Container>
      <Image
        src="/logo-white.svg"
        alt="Rimac"
        width={85.4}
        height={42}
        className="footer_logo__desk"
      />
      <Image
        src="/logo-white-row.svg"
        alt="Rimac"
        width={138}
        height={20}
        className="footer_logo__phone"
      />

      <Separator />

      <p className='footer_wording'>© 2023 RIMAC Seguros y Reaseguros.</p>
    </Container>
  )
}
