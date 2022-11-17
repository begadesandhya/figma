import React from 'react'
import styled from 'styled-components';

const Services = () => {
  return (
    <Container>
    <InfoWrapper>
        <h2>Services and Session
        <p>Add services and sessions included in the membership</p></h2>
        </InfoWrapper>
        <hr></hr>
        <Form>
        <div>
            <lable>Included services</lable><br/>
            <button>0 services <span>Edit</span></button>
        </div>
        <div className='Description'>
        <div>
        <lable>Sessions </lable><br/>
        <select>
            <option value="limited">Limited</option>           
            <option value="unlimited">Unlimited</option>                     
        </select>
        </div>
        <div>
        <lable>Number of sessions </lable><br/>
        <input type="text" className='session'/>
        </div>
        </div>
        </Form>
       
    </Container>
  )
}

const Form = styled.div`
margin-left: 30px;
.Description {
    margin-top: 20px;
    display: flex;
}

button {
    width: 60%;
    height: 30px;
    margin-top: 5px;
    font-family: 'SF Pro Display';
    padding-left: 15px;
    color: #000000;
    font-size: 15px;
    text-align: left;
    background: #F2F2F7;
border: 1px solid #F2F2F7;
border-radius: 4px;
}

textarea {
    width: 60%;
    height: 80px;
    margin-top: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
span {
  
    color: #1BB70B;
    margin-left: 345px;
}

lable {
    font-family: 'SF Pro Display';
font-style: normal;
font-weight: 300;
font-size: 17px;
margin: 0;
}

select {
    width: 55%;
    height: 25px;
    margin-top: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #FFFFFF;
    font-family: 'SF Pro Display';
font-weight: 300;
font-size: 17px;
margin-right: 150px;
padding-right: 0;
}

.session {
    width: 200px;
    height: 20px;
}

input {
    width: 60%;
    height: 20px;
    margin-top: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
`;


const InfoWrapper = styled.div`
margin-left: 30px;
h2 {
    font-family: 'SF Pro Display';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 30px;

}

p {
    font-family: 'SF Pro Display';
font-style: normal;
font-weight: 300;
font-size: 17px;
margin-top: 10px;
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
top: 420px;

hr {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 798px;
}

`;

export default Services