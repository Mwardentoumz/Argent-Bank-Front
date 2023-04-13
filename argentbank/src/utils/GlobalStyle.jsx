import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   html, input {
      font-family: Avenir, Helvetica, Arial, sans-serif;
   }
   html {
      min-height: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
   }
 
   body {
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
   }
   main {
      min-height: calc(100vh - 145px);
   }
   .sr-only {
      border: 0 !important;
      clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important; /* 2 */
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important; /* 3 */
    }
`;

export default GlobalStyle;