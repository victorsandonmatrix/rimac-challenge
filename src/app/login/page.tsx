'use client'
import Image from 'next/image'

import { Tag } from '@/components/Tag/Tag'
import { LoginLayout } from '@/components/LoginLayout/LoginLayout'

import { Container } from './style'

const LoginPage = () => {
  return (
    <LoginLayout>
      <Container>
        <Image
          src="/login-image.png"
          alt="Login Wallpaper"
          width={415}
          height={470}
          className="login_wallpaper"
        />

        <div className="login_section">
          <div className="login_section__head">
            <Tag text="Seguro Salud Flexible" />

            <h2 className="login_title">Creado para ti y tu familia</h2>

            <p className="login_text">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>
          </div>

          <div className="login_inputs"></div>

          <div className="login_terms_and_conditions"></div>

          <button>Cotiza aquí</button>
        </div>
      </Container>
    </LoginLayout>
  )
}

export default LoginPage
