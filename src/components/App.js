import React from 'react';
import styled from 'styled-components';
import BasicInfo from './BasicInfo';
import Services from './Services';

const App = () => {
  return (
    <>
    <Container>
    <h1>Create a membership</h1>
    <BasicInfo />
    <Services />
    </Container>
    </>
  )
}

const Container = styled.div`
position: absolute;
top: 0;
buttom: 0;
left: 0;
right: 0;

h1 {
  font-family: 'SF Pro Text';
font-style: normal;
font-weight: 600;
font-size: 36px;
text-align: center;
}
`;

export default App

