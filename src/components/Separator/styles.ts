'use client'
import styled from 'styled-components'

export const StyledSeparator = styled.div<{ color?: string }>`
  border-top: 1px solid ${(props) => props.color ?? '#2b304e'};
  align-self: stretch;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
