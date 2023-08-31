'use client'
import styled from 'styled-components'

interface Props {
  $bgColor?: string
}

export const StyledButton = styled.button<Props>`
  all: unset;
  color: #ffffff;
  padding: 1.25rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : '#03050f')};
  border-radius: 2.5rem;
  letter-spacing: 0.4px;

  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;

  & :hover {
    background-color: #ff010f;
  }

  @media (max-width: 768px) {
    align-self: stretch;
    text-align: center;
    font-size: 1.125rem;
  }

  &:disabled {
    background-color: gray;
  }
`