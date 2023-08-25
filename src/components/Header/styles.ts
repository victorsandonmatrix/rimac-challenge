'use client'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;

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
  }

  .header_telf {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
  }
`