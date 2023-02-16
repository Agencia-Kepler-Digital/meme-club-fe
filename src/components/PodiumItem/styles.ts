import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    font-size: 1.5rem;
  }

  .picture-container {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 0px 10px 2px #d7b73e;
    margin-top: 12px;

    > .img {
      position: relative !important;
    }
  }

  h2 {
    font-size: 1.2rem;
    margin-top: 20px;
    font-weight: 400;
    line-height: 1.2;
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;
