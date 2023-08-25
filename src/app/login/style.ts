import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 7rem;
  padding-top: 1.5rem;

  .login_wallpaper {
    border-radius: 1rem;
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
  }

  .login_title {
    color: #03050f;
    font-weight: 700;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`
