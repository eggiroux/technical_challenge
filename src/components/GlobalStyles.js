import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body,
    div,
    span,
    ul {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    }

  html, body  {
    height: 100%;
  }

  #root {
height: 100%;
  }

    /* GLOBAL STYLES */
    *,
    *:before,
    *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Poppins, sans-serif;
    }
    a {
            text-decoration: none;
    }
    ol, ul {
        list-style: none;
    }

`;
