import { FC } from 'react'

import { StyledSeparator } from './styles'

interface Props {
  color?: string
}

export const Separator: FC<Props> = ({ color }) => {
  return <StyledSeparator color={color} />
}
