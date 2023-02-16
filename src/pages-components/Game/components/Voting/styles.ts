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

  .meme-container {
    margin-top: 32px;

    .meme {
      position: relative !important;
      max-height: 400px;
    }
  }

  > strong {
    margin-top: 56px;
    font-size: 16px;
  }

  > span {
    margin-top: 4px;
    font-size: 20px;
  }

  .meme-counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
  }
`;

export const RateContainer = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 6px;

  .disabled,
  .active {
    transition: all 0.1s ease-in;

    &:hover {
      transform: scale(1.09);
      cursor: pointer;
    }

    &:active {
      transform: scale(1);
    }
  }

  .disabled {
    opacity: 0.3;
  }
`;
