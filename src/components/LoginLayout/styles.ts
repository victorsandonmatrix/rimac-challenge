import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;

  .purple-blur {
    position: fixed;
    height: 100%;
    top: 0;
    pointer-events: none;
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .green-blur {
    position: fixed;
    height: 100%;
    right: 0;
    pointer-events: none;
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .green-blur__mini {
    position: fixed;
    top: 0;
    right: 0;
    pointer-events: none;
    display: none;
    z-index: -1;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .purple-blur__mini {
    position: fixed;
    bottom: 0;
    left: 0;
    pointer-events: none;
    display: none;
    z-index: -1;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .login_body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login_children {
    width: 80%;
  }
`
