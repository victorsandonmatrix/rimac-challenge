'use client'
import Link from 'next/link'
import Image from 'next/image'

import { Tag } from '@/components/Tag/Tag'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { Checkbox } from '@/components/Checkbox/Checkbox'
import { LoginLayout } from '@/components/LoginLayout/LoginLayout'

import { Container } from './style'

const LoginPage = () => {
  return (
    <LoginLayout>
      <Container>
        <Image
          src="/login-image.png"
          alt="Login Wallpaper"
          width={480}
          height={560}
          className="login_wallpaper"
        />

        <div className="login_section">
          <div className="login_section__head">
            <div>
              <Tag text="Seguro Salud Flexible" />

              <h2 className="login_title">Creado para ti y tu familia</h2>
            </div>

            <Image
              src="/login-image.png"
              alt="Login Wallpaper"
              height={160}
              width={136}
              className="login_wallpaper__mini"
            />
          </div>
          
          <p className="login_text">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>

          <div className="login_inputs">
            <Input label="Nro. de documento" type="number" isDni max={8} />

            <Input label="Celular" type="number" max={9} />
          </div>

          <div className="login_terms_and_conditions">
            <Checkbox text="Acepto lo Política de Privacidad" />

            <Checkbox text="Acepto la Política Comunicaciones Comerciales" />

            <Link href="#" className="link_tyc">
              Aplican Términos y Condiciones.
            </Link>
          </div>

          <Button>Cotiza aquí</Button>
        </div>
      </Container>
    </LoginLayout>
  )
}

export default LoginPage
