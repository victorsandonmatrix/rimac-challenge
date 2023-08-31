'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  padding: 1.5rem;

  .home_title {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: -0.2px;
    color: #141938;
    margin-bottom: 0.5rem;
    margin-top: 2rem;

    @media (min-width: 768px) {
      max-width: 544px;
      text-align: center;
      font-size: 2.5rem;
    }
  }

  .home_paragraph {
    font-size: 1rem;
    letter-spacing: 0.1px;
    color: #141938;
    margin-bottom: 2rem;
  }
`
