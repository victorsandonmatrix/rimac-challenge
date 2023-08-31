import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #141938;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }

  .success_title {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.6px;
    color: #141938;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .success_infocard {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 1px 24px 0px rgba(174, 172, 243, 0.25);
    border-radius: 1.5rem;
    padding: 1.5rem 2rem;
  }

  .infocard_header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .infocard_header_subtitle {
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.8px;
    color: #141938;
  }

  .infocard_header_name {
    display: flex;
    gap: 0.75rem;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.2px;
  }

  .infocard_body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .infocard_item {
    display: flex;
    flex-direction: column;
  }

  .infocard_subtitle {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.2px;
  }

  .infocard_text {
    font-size: 14px;
    letter-spacing: 0.1px;
  }
`
