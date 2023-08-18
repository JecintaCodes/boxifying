import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai"
import { NavLink } from "react-router-dom";
// import Learn from "../Pages/Learn";
// import Footer from "./Footer"



const Header = () => {
  return (
    <Container>

      <Main>

        <NavBar>
          
            <Iconify/>

            <Login>
              <Log>UG</Log>
              <Logo>Jecinta</Logo>
            </Login>
            <Navigation>
          <Nav to= {"features"}>
            <span>Features</span>
            </Nav>         
            <Nav to ={"learn"}> 
            <span>Learn</span>
            </Nav>
          <Nav to ={"about"}>
            <span>About</span>
            </Nav>
          <Nav to ={"pricing"}>
            <span>Pricing</span>
          </Nav>
          <Nav to ={"support"}>
            <span>Support</span>
          </Nav>
          </Navigation>
         
          <Button>
            <Box>Get early access</Box>
          </Button>

        </NavBar>
      </Main>

    </Container>
  );
};


export default Header






const Iconify = styled(AiOutlineMenu)`
  display: none;
  font-size: 25px;
  
   /* display: flex;
      align-items: center; */
 @media screen and (width: 500px ){
      display: block;
      margin-left: 20px;
      display: flex;
      align-items: center;
  }

  `;
const Box = styled.div`
  
  background-color: darkorange;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border-radius: 30px;

  /* margin-top: 20px;   */
cursor: pointer;
transition: all 360ms;


:hover{
  /* text-transform: uppercase; */
   color: whitesmoke;
  /* text-transform: uppercase; */
    background-color: orange;
      transform: scale(1);
}

  `;

const Button = styled.div`
  margin-right: 20px;
  `;

const Nav = styled(NavLink)`
   display: flex;
   /* margin-top: 20px; */
   cursor: pointer;
   margin-left: 30px;
  /* text-align: end; */
  font-size: 15px;
    font-weight: bold;
  transition: all 365ms;
  text-decoration: none;


   :hover{
     /* text-transform: uppercase; */
     /* color: black; */
     color: orange;
     background-color: whitesmoke;
     height: 30px;
     width: 75px;
     display: flex;
     justify-content: center;
     /* transform-scale(1);  */
  }
   
 
   `;

const Navigation = styled.div`
   
   /* color: grey; */
display: flex;
@media screen and (max-width: 768px) {
    display: none
   }


  `;

const Logo = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-left: 7px;
  display: flex;
  justify-content: center;
  `;

const Log = styled.div`
font-weight: bold;
font-size: 20px;
margin-left: 20px;
background-color: darkorange;
width: 50%;
color: white;
padding: 5px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;


@media screen and (width: 500px){
  margin-right: 0px;  
}
`;
const Login = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* margin-bottom: 20px; */


@media screen and (width: 500px){
  /* margin-top: 20px; */
}
`;

// const Hold = styled.div`
// display: flex; 
// /* justify-content: space-between; */
// /* margin-top: 10px;  */
// `;

const NavBar = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */


  `;

const Main = styled.div`
   width: 100%;
  height: 150Px;
  border: 1px solid lightgrey;
  `;

const Container = styled.div`
  margin: 0px 20px;
 `;






