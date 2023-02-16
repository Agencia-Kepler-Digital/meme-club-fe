import styled from 'styled-components';

export const Container = styled.div`
  .image-container {
    max-width: 100%;
    width: 500px;
  }
  .meme {
    width: 100%;
    position: relative !important;
  }

  footer {
    background: #ffffff10;
    transform: translateY(-2px);
    padding: 16px 32px;
    display: flex;
    align-items: flex-end;
    border-radius: 0px 0px 24px 24px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    .left {
      display: flex;
      align-items: flex-end;
    }

    .score {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      > strong {
        font-size: 1.3rem;
      }

      > span {
        font-size: 0.8rem;
      }
    }

    .made-by {
      display: flex;
      flex-direction: column;
      margin-left: 16px;

      > strong,
      > span {
        color: #ffffff50;
      }

      > strong {
        font-size: 0.5rem;
      }

      > span {
        font-size: 0.7rem;
      }
    }

    .download-icon {
      transition: all 0.1s ease-in;

      &:hover {
        transform: scale(1.07);
        cursor: pointer;
      }
    }
  }
`;
