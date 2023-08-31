'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  padding: 2rem;
  padding-bottom: 3rem;
  box-shadow: 0px 1px 32px 0px rgba(174, 172, 243, 0.35);
  border-radius: 1.5rem;
  margin-top: 2.5rem;
  width: 290px;

  .plancard_header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .plancard_title {
    width: 152px;
    font-size: 1.5rem;
    margin-top: 0.125rem;
  }

  .plancard_cost {
    width: 100%;
  }

  .plancard_cost_title {
    color: #7981b2;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.6px;
  }

  .plancard_cost_amount {
    font-size: 1.25rem;
    font-weight: 900;
    letter-spacing: -0.2px;
  }

  .plancard_list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 20px;
    margin-bottom: 2.5rem;
  }

  .plancard_item {
    font-size: 1rem;
    letter-spacing: 0.1px;
    color: #141938;
  }

  button {
    margin-top: auto;
  }

  .plancard_button_text {
    font-size: 1rem;
  }
`
