import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      font-family: 'A little sunshine';
      font-size: 8rem;
      color: #fff;
      font-weight: 500;
    }

    > h2 {
      font-size: 6.5rem;
      color: #fff;
      font-weight: 500;
      transform: translateY(-12px);
    }

    span {
      font-size: 0.7rem;
      color: #fff;
      font-weight: 500;
    }
  }

  > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 32px;

    input {
      margin-top: 16px;
    }

    .button-wrapper {
      display: flex;
      width: 100%;
      gap: 12px;
      margin-top: 16px;
    }

    .google {
      margin-top: 12px;
    }
  }

  footer {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 1.2rem;
    color: #fff;

    span {
      font-size: 0.8rem;
    }
  }
`;
