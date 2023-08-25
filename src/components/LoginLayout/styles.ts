'use client'
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
  }

  .green-blur {
    position: fixed;
    height: 100%;
    right: 0;
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
