import { FC, ReactNode } from 'react'

import { StyledButton } from './styles'

interface Props {
  children: ReactNode
  onClick?: () => void
}

export const Button: FC<Props> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
