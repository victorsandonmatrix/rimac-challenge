import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 7rem;
  padding-top: 1.5rem;

  .login_wallpaper {
    border-radius: 1rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .login_wallpaper__mini {
    border-radius: 1rem;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .login_section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
  }

  .login_section__head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  .login_title {
    color: #03050f;
    font-weight: 700;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .login_text {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.2px;

    @media (max-width: 768px) {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid #ccd1ee;
    }
  }

  .login_inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .login_terms_and_conditions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 1.5rem;
  }

  .link_tyc {
    font-weight: 600;
    font-size: 12px;
    text-decoration: underline;
  }
`
