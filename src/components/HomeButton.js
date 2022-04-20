import React from 'react';
import styled from 'styled-components';
import EnterBtn from './Svgs';

const HomeButtonStyle = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);

    background-color: #FCF6F4;
    padding: .3rem;
    border: 4px solid;
    border-image: linear-gradient(to right top, #9e62be, #8d72cd, #7a80d7, #678dde, #5799e1) 1;
    width: 5rem;
    height: 5rem;
`    

const HomeButton = () => {
  return (
    <HomeButtonStyle>
        <EnterBtn />
    </HomeButtonStyle>
  )
}

export default HomeButton