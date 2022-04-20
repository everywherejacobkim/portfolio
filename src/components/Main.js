import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 600;
    }


`
const Main = () => {
  return (
    <MainContainer>
        <h1>Hello World</h1>
    </MainContainer>
  )
}

export default Main