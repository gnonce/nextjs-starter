import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body{
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap');
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`;
