import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;

    > strong {
      font-size: 32px;
      color: #fff;
    }
  }
`;
