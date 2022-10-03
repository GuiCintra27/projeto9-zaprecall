import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    --cor-fundo: #FB6B6B;
    --cor-fundo-card: #FFFFD4;
    --cor-nao-lembrei: #FF3030;
    --cor-quase-nao-lembrei: #FF922E;
    --cor-zap: #2FBE34;
    --preto: #333333;
  }

  html{
    font-size: 62.5%;
  }

  img {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--preto);
    font-family: 'Recursive', sans-serif;
    font-size: clamp(14px, 1.6rem, 2vw);
    background: var(--cor-fundo);
    /* font-family: 'Righteous', cursive; */
  }
`;

export default GlobalStyle;