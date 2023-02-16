import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;

  > header {
    margin-bottom: 64px;

    > strong {
      font-size: 2rem;
      color: #fff;
    }
  }

  .button-wrapper {
    display: flex;
    width: 100%;
    gap: 16px;
    margin-top: 24px;
  }
`;
