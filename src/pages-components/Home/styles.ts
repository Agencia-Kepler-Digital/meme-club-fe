import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding-top: 164px;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      font-family: 'A little sunshine';
      font-size: 160px;
      color: #fff;
      font-weight: 500;
    }

    > h2 {
      font-size: 128px;
      color: #fff;
      font-weight: 500;
      transform: translateY(-12px);
    }

    span {
      font-size: 16px;
      color: #fff;
      font-weight: 500;
    }
  }

  > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .profile-picture {
      border-radius: 50%;
      margin-top: 32px;
      width: 40%;
      height: auto;
    }

    .reload-icon-wrapper {
      background: #fff;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transform: translateY(-24px);
    }

    form {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > input {
        background: #ffffff25;
        width: 100%;
        padding: 16px 32px;
        font-size: 16px;
        color: #fff;
        border-radius: 24px;
      }

      .input-icon {
        position: absolute;
        right: 16px;
      }
    }

    .button-wrapper {
      display: flex;
      width: 100%;
      gap: 16px;
      margin-top: 24px;
    }
  }

  footer {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 32px;
    color: #fff;
  }
`;
