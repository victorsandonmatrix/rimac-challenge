'use client'
import Image from 'next/image'

import { MainLayout } from '@/layouts/MainLayout/MainLayout'
import { Separator } from '@/components/Separator/Separator'
import { getItem } from '@/util/storage'

import { Container } from './styles'
import { useEffect, useState } from 'react'

export default function Success() {
  const [plan, setPlan] = useState()
  const [price, setPrice] = useState()
  const [name, setName] = useState()
  const [dni, setDni] = useState()
  const [telf, setTelf] = useState()

  useEffect(() => {
    setPlan(getItem('choosedPlan').name)
    setPrice(getItem('choosedPlan').price)
    setName(getItem('user').name)
    setDni(getItem('dni'))
    setTelf(getItem('telf'))
  }, [])

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
