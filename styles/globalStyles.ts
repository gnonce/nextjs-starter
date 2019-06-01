import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body{
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700');
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`;
