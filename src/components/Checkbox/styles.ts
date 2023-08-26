import styled from 'styled-components'

export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: block;
  padding-left: 20px;

  .checkbox_input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    padding: 2px;
    border-radius: 0.25rem;
    border: 1px solid #0a051e;
  }

  p {
    font-size: 12px;
  }

  /* When the radio button is checked, add a blue background */
  .checkbox_input:checked ~ .checkmark {
    background-color: #0a051e;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .checkmark:after {    
    left: 4px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .checkbox_input:checked ~ .checkmark:after {
    display: block;
  }
`
