import { FC } from 'react'
import { StyledCheckbox } from './styles'

interface Props {
  text: string
}

export const Checkbox: FC<Props> = ({ text }) => {
  return (
    <StyledCheckbox>
      <input type="checkbox" className='checkbox_input' />
      <span className="checkmark"></span>

      <p>{text}</p>
    </StyledCheckbox>
  )
}
