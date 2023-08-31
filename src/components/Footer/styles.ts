'use client'
import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;

  font-size: 14;

  padding: 2rem;
  background-color: #03050f;

  .footer_wording {
    color: #f8f9ff;
    font-weight: 100;
    font-size: 14px;
  }

  .footer_logo__phone {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .footer_logo__phone {
      display: block;
    }

    .footer_logo__desk {
      display: none;
    }

    .footer_wording {
      font-size: 12px;
    }
  }
`
