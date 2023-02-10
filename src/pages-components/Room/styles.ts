import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  width: 90%;
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
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    gap: 12px;
    max-width: 400px;
    position: absolute;
    bottom: 140px;
  }
`;
