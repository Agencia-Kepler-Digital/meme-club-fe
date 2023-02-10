import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: none;
    line-height: 1;
    font-family: 'Asap', sans-serif;
    font-weight: 500;
 }
 body {
    background: radial-gradient(50% 50% at 50% 50%, #306DE2 0%, #5812C9 100%);
    background-repeat: no-repeat;
    height: 100vh;
 }
`;
