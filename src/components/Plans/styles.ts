'use client'
import styled from 'styled-components'

interface Props {
  hidden?: boolean
}

export const Container = styled.div<Props>`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  gap: 2rem;
`
