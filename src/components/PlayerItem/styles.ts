import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .player-picture {
    width: 48px;
    height: auto;
    border-radius: 50%;
  }

  > span {
    color: #fff;
    font-size: 16px;
  }

  .leader {
    background: #5712c8;
    padding: 12px 24px;
    margin-left: 16px;
    border-radius: 24px;
    font-weight: 700;
  }
`;
