'use client'
import styled from 'styled-components'

interface Props {
  $isCheck: boolean
  type: 'rounded' | 'square'
  $activeColor: string
  size: 'sm' | 'normal'
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  gap: 0.5rem;

  .checkbox_checkmark {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ size }) => (size === 'normal' ? '2px' : '2.4px')};
    border: 1px solid ${({ $isCheck }) => ($isCheck ? '#ffffff' : '#a9afd9')};
    border-radius: ${({ type }) => (type === 'square' ? '4px' : '50%')};
    background-color: ${({ $isCheck, $activeColor }) =>
      $isCheck ? $activeColor : ''};
  }

  .checkmark_icon {
    visibility: ${({ $isCheck }) => ($isCheck ? 'visible' : 'hidden')};
  }

  .checkbox_text {
    font-size: 12px;
    letter-spacing: 0.1px;
    color: #0a051e;
  }
`
