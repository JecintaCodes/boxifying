import React from "react";
import styled from "styled-components"



function Footer() {
  return (
    <div>
      <Container>
        <Main>
          <Text> All done by Onyemaobi jecinta ugochi on her journey to be a software engineer and a full stack engineer</Text>
          <Test> Message me on: onyemaobijecinta@gmail.com</Test>
            <Span>follow me on facebook: Je Cin Ta @ Ugochi Onyemaobi </Span>
            <Test1>follow me on watxap: 09163453316, 09126124352</Test1>
            <Test2>follow me on Instagram: Onyemaobi Jecinta</Test2>
            <Test3>for more enquires Dm me or call me privately for serious business...</Test3>
         
        </Main>
      </Container>

    </div>
  );
}

export default Footer;





const Test3 = styled.div`
margin-top: 15px;

cursor: pointer;
:hover{
  color: darkorange;
}
`;
const Test2 = styled.div`
margin-top: 15px;

cursor: pointer;
:hover{
  color: darkorange;
}
`;
const Test1 = styled.div`
margin-top: 15px;

cursor: pointer;
:hover{
  color: darkorange;
}
`;
const Span = styled.div`
margin-top: 15px;

cursor: pointer;
:hover{
  color: darkorange;
}
`;
const Test = styled.div`
margin-top: 15px;

cursor: pointer;
:hover{
  color: darkorange;
}
`;
const Text = styled.div`
margin-top: 40px;
cursor: pointer;
:hover{
  color: darkorange;
}
`;
const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 20px;
margin-top: 20px;
background-color: black;
color: white;
margin: 20px;
padding: 10px;
font-size: 17px;
font-weight: bold;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
 

  `;
