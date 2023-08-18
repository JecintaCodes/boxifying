import React from "react";
import styled from "styled-components";


const Pricing = ()=> {
  return (
    <Container>
      <Main>
        <Text>I am pricing how can i help you ?</Text>
      </Main>
    </Container>

  );
}

export default Pricing




const Text = styled.div`
 font-size: 30px;
font-weight: bolder;
transform: scale(1);
text-transform: uppercase;
color: black;

:hover{
   color: orange;
    transition: all 360ms;
    cursor: pointer;
} 
`;
const Main = styled.div`
margin-left: 20px;
height:400px;
width: 800px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
background-image:linear-gradient(#FF0000, gold, orange, darkorange);

`;
const Container = styled.div`
width: 100%;
height: 100%;

background: radial-gradient(
  rgba(215,125,255,325.1) 8%,
  transparent 2%
);
background-position: 0% 0%;
background-size: 5vmin 5vmin;
display: flex;
justify-content: center;
align-items: center;
`;