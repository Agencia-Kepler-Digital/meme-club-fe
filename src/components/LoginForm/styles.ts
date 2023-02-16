import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  .profile-picture {
    border-radius: 50%;
    margin-top: 1.5rem;
    width: 40%;
    height: auto;
  }

  .reload-icon-wrapper {
    background: #fff;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transform: translateY(-24px);
  }
  form {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > input {
      background: #ffffff25;
      width: 100%;
      padding: 16px 32px;
      font-size: 16px;
      color: #fff;
      border-radius: 24px;

      &::placeholder {
        color: #ffffff90;
      }
    }

    .input-icon {
      position: absolute;
      right: 16px;
    }
  }
`;
