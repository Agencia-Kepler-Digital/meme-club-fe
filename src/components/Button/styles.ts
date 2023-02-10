import styled from 'styled-components';

type ButtonProps = {
  type?: 'red' | 'green';
  fontSize?: string;
  wrap?: boolean;
};
export const Container = styled.div<ButtonProps>`
  display: flex;
  flex: 1;

  > button {
    width: ${({ wrap }) => !wrap && '100%'};
    background: ${({ type }) => (type === 'red' ? '#E63946' : '#28AA2E')};
    padding: 16px 16px;
    color: #fff;
    border-radius: 24px;
    transition: all 0.1s ease-in;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.8rem')};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;
