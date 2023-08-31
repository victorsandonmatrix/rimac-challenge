'use client'
import styled from 'styled-components'

interface Props {
  $isActive: boolean
}

export const Container = styled.div<Props>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0px 1px 32px 0px rgba(174, 172, 243, 0.35);
  color: #141938;
  border: 3px solid
    ${({ $isActive }) => ($isActive ? '#141938' : 'transparent')};

  .forcard_title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.25rem;
    margin-top: 2px;
    margin-bottom: 0.5rem;

    @media (min-width: 768px){
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .forcard_p {
    font-size: 0.75rem;
    letter-spacing: 0.2px;

    @media (min-width: 768px) {
      max-width: 231px;
    }
  }
`
