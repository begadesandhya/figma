import React from 'react';
import styled from 'styled-components';

const BasicInfo = () => {
  return (
    <Container>
    <InfoWrapper>
        <h2>Basic info</h2>
        <hr></hr>
        <Form>
        <div>
            <lable>Membership name</lable><br/>
            <input type="text" placeholder='Add membership name' />
        </div>
        <div className='Description'>
        <lable>Membership description <span>0/300</span> </lable><br/>
            <textarea placeholder='Add membership description'/>
        </div>
        </Form>
        </InfoWrapper>
    </Container>
  )
}

const Form = styled.div`
margin-left: 30px;
.Description {
    margin-top: 20px;
}

textarea {
    width: 60%;
    height: 80px;
    margin-top: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-family: 'SF Pro Display';
    padding-left: 15px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 15px;
}
span {
    color: rgba(0, 0, 0, 0.6);
    margin-left: 250px;
}

lable {
    font-family: 'SF Pro Display';
font-style: normal;
font-weight: 300;
font-size: 17px;
margin: 0;
}

input {
    width: 60%;
    height: 25px;
    margin-top: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-family: 'SF Pro Display';
    padding-left: 15px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 15px;
}
`;

const Container = styled.div`
box-sizing: border-box;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 4px;
position: absolute;
width: 800px;
height: 300px;
left: 368px;
top: 90px;
display: flex;
`;

const InfoWrapper = styled.div`


h2 {
    font-family: 'SF Pro Display';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 33px;
margin-left: 30px;
}

hr {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 798px;
}
`;

export default BasicInfo