import styled from 'styled-components';

type ContainerProps = {
  textColor?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 96px;
  padding-top: 24px;

  * {
    color: ${({ textColor }) => (textColor ? textColor : '#fff')};
  }

  .left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .profile-picture {
    width: 48px;
    height: auto;
    border-radius: 50%;
  }

  span {
    font-size: 1rem;
    font-weight: 600;
  }

  strong {
    font-size: 1rem;
    font-weight: 600;
  }
`;
