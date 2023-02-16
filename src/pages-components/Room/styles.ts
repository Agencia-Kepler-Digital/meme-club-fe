import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;

  .join-room {
    margin-top: 12px;
  }

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

    p {
      font-size: 16px;
      color: #fff;
      font-weight: 500;
    }

    > strong {
      font-size: 2rem;
      color: #fff;
    }

    > span {
      background: #ffffff50;
      padding: 12px 24px;
      color: #fff;
      border-radius: 24px;
      margin-top: 24px;
    }
  }

  .players-container {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    gap: 20px;
    background: #ffffff10;
    padding: 24px 16px;
    border-radius: 24px;
    width: 90%;
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    gap: 12px;
    max-width: 500px;
    position: absolute;
    bottom: 140px;
  }

  .room-link {
    background: #ffffff50;
    position: absolute;
    right: 64px;
    bottom: 140px;
    padding: 14px 24px;
    border-radius: 24px;
  }
`;
