import React from "react"
import styled from "styled-components"


const Support = () => {
    return(
        <div>
            <Container>
                <Main>
                    <Text>Support Me Guyz !!!</Text>
                </Main>
            </Container>
        </div>
    )
}

export default Support


const Text = styled.div`
 font-size: 50px;
font-weight: bolder;
transform: scale(1);
text-transform: uppercase;
color: black;

:hover{
   color: white;
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