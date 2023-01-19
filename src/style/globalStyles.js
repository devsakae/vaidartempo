import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
	  margin: 0;
	  padding: 0;
	  font-family: 'Kanit', sans-serif;
	  font-size: 20px;
  }
`;

export default GlobalStyles;