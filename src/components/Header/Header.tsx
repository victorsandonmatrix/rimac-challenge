import Image from 'next/image'
import { Container } from './styles'

export const Header = () => {
  return (
    <Container>
      <Image src="/logo.svg" alt="Rimac" width={73.2} height={26} />

      <div className="header_right">
        <p className="header_right__text">¡Compra por este medio!</p>

        <div className="header_telf">
          <Image
            src="/telephonesolid.svg"
            alt="Telephone"
            width={20}
            height={20}
          />

          <p>(01) 411 6001</p>
        </div>
      </div>
    </Container>
  )
}
