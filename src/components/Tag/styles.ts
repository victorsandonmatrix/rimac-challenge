'use client'
import styled from 'styled-components'

interface Props {
  $size?: 'sm' | 'lg'
}

export const Container = styled.p<Props>`
  color: #03050f;
  font-weight: 700;
  letter-spacing: 0.4px;
  border-radius: 0.25rem;
  background: linear-gradient(45deg, #00f4e2 0%, #00ff7f 100%);
  padding: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: inline;
  font-size: ${({ $size }) =>
    !$size ? '16px' : $size === 'sm' ? '12px' : '16px'};

  @media (max-width: 768px) {
    font-size: ${({ $size }) => !$size && '12px'};
  }
`
