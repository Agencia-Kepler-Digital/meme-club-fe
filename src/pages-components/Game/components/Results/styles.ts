import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;

  overflow: hidden;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 0.9rem;
    }

    > strong {
      font-size: 2rem;
      margin-top: 16px;
    }

    > span {
      font-size: 1.8rem;
      margin-top: 4px;
    }
  }

  main {
    margin-top: 32px;
    display: flex;
    gap: 64px;

    .left-content {
      overflow-y: scroll;
      height: 75vh;
      padding-right: 12px;

      &::-webkit-scrollbar {
        width: 8px;
        height: 50px;
        background: #cecece50;
        border-radius: 999px;
      }
      &::-webkit-scrollbar-thumb {
        background: #ffffff50;
        border-radius: 999px;
      }
    }

    .right-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .scoreboard {
        background: #ffffff10;
        padding: 24px 32px;
        border-radius: 20px;
        margin-bottom: 24px;

        > strong {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
