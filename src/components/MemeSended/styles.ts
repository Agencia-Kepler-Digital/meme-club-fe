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
      font-size: 160px;
      color: #fff;
      font-weight: 500;
    }

    > h2 {
      font-size: 72px;
      color: #fff;
      font-weight: 500;
      transform: translateY(-12px);
    }
  }

  p {
    font-size: 16px;
    margin-top: 56px;
  }

  strong {
    margin-top: 156px;
    font-size: 16px;
  }

  span {
    margin-top: 4px;
    font-size: 20px;
  }
`;
