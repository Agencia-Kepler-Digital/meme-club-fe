import styled from 'styled-components';

type ButtonProps = {
  type: 'red' | 'green';
};
export const Container = styled.div<ButtonProps>`
  display: flex;
  flex: 1;

  > button {
    width: 100%;
    background: ${({ type }) => (type === 'red' ? '#E63946' : '#28AA2E')};
    padding: 16px 12px;
    color: #fff;
    border-radius: 24px;
    transition: all 0.1s ease-in;
    font-size: 1rem;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;
