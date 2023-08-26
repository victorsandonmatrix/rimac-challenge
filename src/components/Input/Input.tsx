'use client'
import { FC, HTMLInputTypeAttribute } from 'react'
import Image from 'next/image'

import { StyledInput } from './styles'

interface Props {
  label: string
  type: HTMLInputTypeAttribute
  isDni?: boolean
  max: number
}

export const Input: FC<Props> = ({ label, type, isDni, max }) => {
  return (
    <StyledInput>
      {isDni && (
        <div className="input_dni">
          <p>DNI</p>

          <Image
            src="/arrow-down.svg"
            alt="Arrow Down"
            height={20}
            width={20}
          />
        </div>
      )}
      <div className="input_right">
        <p className="input_label">{label}</p>

        <input type={type} maxLength={max} />
      </div>
    </StyledInput>
  )
}
