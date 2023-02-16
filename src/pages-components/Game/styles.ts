import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;

    > strong {
      font-size: 2rem;
    }
  }

  > main {
    display: flex;
    width: 90%;
    max-width: 1300px;
    gap: 10rem;
    margin-top: 96px;

    .left-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40%;

      .meme {
        width: 100%;
        height: auto;
        margin-bottom: 24px;
        position: relative !important;
      }
    }
    .right-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      width: 50%;

      > form {
        display: flex;
        gap: 12px;
        margin-top: 16px;

        input {
          background: #ffffff25;
          width: 65%;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          padding: 0 1.5rem;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 96px;
  }
`;
