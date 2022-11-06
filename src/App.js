import React from 'react';
import styled from 'styled-components';
import Layout from './Components/Layout/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{

  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(0deg, #000000,#444444 );
  }

}

`;
const Container = styled.div`
  overflow-x: hidden;
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Layout />
      </Container>
    </>
  );
};

export default App;
