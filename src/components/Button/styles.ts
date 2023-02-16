import styled from 'styled-components';

type ButtonProps = {
  type?: 'red' | 'green';
  fontSize?: string;
  wrap?: boolean;
  outline?: boolean;
  disabled?: boolean;
};
export const Container = styled.div<ButtonProps>`
  display: flex;
  flex: 1;
  width: ${({ wrap }) => !wrap && '100%'};

  > button {
    width: ${({ wrap }) => !wrap && '100%'};
    background: ${({ type }) => (type === 'red' ? '#E63946' : '#28AA2E')};
    background: ${({ outline }) => outline && 'transparent'};
    border: ${({ outline }) => outline && '1px solid white'};
    padding: 16px;
    color: #fff;
    border-radius: 32px;
    transition: all 0.1s ease-in;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.7rem')};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

    &:hover {
      transform: ${({ disabled }) => !disabled && 'scale(1.02)'};
      cursor: ${({ disabled }) => !disabled && 'pointer'};
    }
  }
`;
