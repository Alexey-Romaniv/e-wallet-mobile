import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  main {
    padding-top: 65px;
    padding-bottom: 50px;

    @media screen and (min-width: 768px) {
      padding-top: 112px;
    }
    @media screen and  (min-width: 1280px) {
      padding-top: 120px;
    }
  }

  header {
    background-color: #FFF;
    padding: 15px 0;

    @media screen and (min-width: 768px) {
      padding: 20px 0;
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${p => p.theme.fonts.titleFont};
    color: ${p => p.theme.colors.titleText};
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
    color: ${p => p.theme.colors.mainText};
  }

  a {
    text-decoration: none;
  }

  button {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  body {
    background-color: ${p => p.theme.colors.mainBackground};
    color: ${p => p.theme.colors.mainText};
    font-family: ${p => p.theme.fonts.mainFont}, sans-serif;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.03em;
  }


  nav .active {
    color: #4A56E2;
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));

    font-weight: 700;
  }
`