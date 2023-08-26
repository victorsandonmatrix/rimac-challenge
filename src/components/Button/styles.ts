import styled from 'styled-components'

export const StyledButton = styled.button`
  all: unset;
  color: #ffffff;
  padding: 1.25rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: #03050f;
  border-radius: 2.5rem;

  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;

  & :hover {
    background-color: #ff010f;
  }

  @media (max-width: 768px){
    align-self: stretch;
    text-align: center;
  }
`
