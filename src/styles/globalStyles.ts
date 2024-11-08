import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
  }

  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }

  pre {
    font-family: 'Public Sans', sans-serif;
    font-size: 1em; 
  }

  a {
    background-color: transparent;
  }
  
  abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: 'Public Sans', sans-serif;
    font-size: 1em; 
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }
  
  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: sans-serif; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  select { 
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    /* padding: 0.35em 0.75em 0.625em; */
  }

  legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }
  
  template {
    display: none;
  }
  
  [hidden] {
    display: none;
  }

  html, body {
    font-family: sans-serif;
    background: linear-gradient(to top, #041015,#040404);
    color: #fff;
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  div#root {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow-y: scroll; /* Mantém a rolagem vertical */

/* Para Chrome, Safari e Edge */
&::-webkit-scrollbar {
  width: 0; /* Defina a largura da barra de rolagem para 0 */
}

/* Para Firefox */
scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */

/* Para garantir que a rolagem ainda funcione, mesmo sem barra de rolagem visível */
-ms-overflow-style: none;  /* Internet Explorer e Edge */
  }
`;

export default GlobalStyles;
