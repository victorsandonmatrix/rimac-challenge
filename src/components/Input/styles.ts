'use client'
import styled from 'styled-components'

export const StyledInput = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #5e6488;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 320px;
  display: flex;
  gap: 1rem;

  .input_dni {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    border-right: 1px solid #5e6488;
    padding-right: 0.5rem;
  }

  .input_right {
    padding: 0.5rem;
  }

  .input_label {
    color: #5e6488;
    font-size: 12px;
  }

  input {
    all: unset;
  }
`
