import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  width: 90%;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;

    > strong {
      font-size: 2rem;
      margin-top: 8px;
    }
  }
`;

export const PodiumWrapper = styled.div`
  background: #ffffff10;
  margin-top: 32px;
  padding: 32px 40px;
  border-radius: 20px;
  display: flex;
  gap: 40px;
`;

export const ScoreBoard = styled.div`
  background: white;
  width: 100%;
  padding: 24px 32px;
  border-radius: 20px;
  margin-top: 24px;
`;
