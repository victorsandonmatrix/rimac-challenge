'use client'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  .header_right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .header_right__text {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.2px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .header_telf {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
  }
`
