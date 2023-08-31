'use client'
import Image from 'next/image'

import { MainLayout } from '@/layouts/MainLayout/MainLayout'
import { Separator } from '@/components/Separator/Separator'
import { getItem } from '@/util/storage'

import { Container } from './styles'

export default function Success() {
  const choosedPlan = getItem('choosedPlan')
  const name = getItem('user').name
  const dni = getItem('dni')
  const telf = getItem('telf')
  const plan = choosedPlan.name
  const price = choosedPlan.price

  return (
    <MainLayout>
      <Container>
        <p className="success_title">Resumen del seguro</p>

        <div className="success_infocard">
          <div className="infocard_header">
            <p className="infocard_header_subtitle">PRECIOS CALCULADOS PARA:</p>

            <div className="infocard_header_name">
              <Image src="/gl_family.svg" alt="Family" height={24} width={24} />

              <p>{name}</p>
            </div>
          </div>

          <Separator color="#D7DBF5" />

          <div className="infocard_body">
            <div className="infocard_item">
              <p className="infocard_subtitle">Responsable de pago</p>
              <p className="infocard_text">DNI: {dni}</p>
              <p className="infocard_text">Celular: {telf}</p>
            </div>

            <div className="infocard_item">
              <p className="infocard_subtitle">Plan elegido</p>
              <p className="infocard_text">{plan}</p>
              <p className="infocard_text">Costo del Plan: ${price} al mes</p>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  )
}
