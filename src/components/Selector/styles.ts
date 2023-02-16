import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;

  label {
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  .selector {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }

  select {
    background: #ffffff50;
    width: 100%;
    padding: 20px 32px;
    border-radius: 32px;
    line-height: 20px;
    font-size: 0.8rem;
    appearance: none;

    &:hover {
      cursor: pointer;
    }

    > option {
      color: black;
    }
  }

  .chevron {
    position: absolute;
    right: 24px;
    transform: rotate(180deg);
    z-index: -5;
  }
`;
