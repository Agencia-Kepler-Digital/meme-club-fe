import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > input {
    background: #ffffff25;
    width: 100%;
    padding: 20px 32px;
    font-size: 16px;
    color: #fff;
    border-radius: 32px;

    &::placeholder {
      color: #ffffff90;
    }
  }
`;
