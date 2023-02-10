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
    color: #fff;
 }
 html {
        font-size: 20px;
        @media (max-width: 1280px) {
            font-size: 18px;
        }
        @media (max-width: 1080px) {
            font-size: 16px;
        }
        @media (max-width: 768px) {
            font-size: 14px;
        }
        @media (max-width: 480px) {
            font-size: 12px;
        }
        @media (max-width: 360px) {
            font-size: 10px;
        }
        @media (max-width: 268px) {
            font-size: 8px;
        }
    }

 body {
    background: radial-gradient(50% 50% at 50% 50%, #306DE2 0%, #5812C9 100%);
    background-repeat: no-repeat;
    height: 100vh;
 }
`;
