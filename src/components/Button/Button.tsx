import { FC, ReactNode } from 'react'

import { StyledButton } from './styles'

interface Props {
  children: ReactNode
  onClick?: () => void
  bgColor?: string
  disabled?: boolean
}

export const Button: FC<Props> = ({ children, onClick, bgColor, disabled }) => {
  return (
    <StyledButton $bgColor={bgColor} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}
