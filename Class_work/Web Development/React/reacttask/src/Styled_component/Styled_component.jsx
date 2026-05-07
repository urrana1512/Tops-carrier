/*
 styled-components lets you write actual CSS in your JavaScript. 
 This means you can use all the features of CSS you use and love

styled-components is the result of wondering how we could enhance CSS for styling React component 
systems. By focusing on a single use case we managed to optimize the experience for developers 
as well as the output for end users.

Apart from the improved experience for developers, styled-components provides:

Automatic critical CSS
No class name bugs:
Easier deletion of CSS:
Simple dynamic styling:
Painless maintenance:

npm install --save styled-components

*/



import React from 'react'
import styled from 'styled-components';

function Styled_component() {

 const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color:palevioletred;
`;

const MyButton = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:none;
    color:palevioletred;
    display:block;
    margin:0 auto;
    &:hover{
            background : palevioletred;
            color:white;
    }
`
 
const Btn = styled.button`
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:LightGray;
    color:White;
    display:block;
    margin:0 auto;
`
const Btn_red = styled(Btn)`
    background:red;
`
const Btn_green = styled(Btn)`
    background:green;
`

const Btn_yellow = styled(Btn)`
    background:yellow;
`

const Btn_pink = styled(Btn)`
    background:pink;
`

const Btn_custom = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;



  return (
    <div>
        <Title> Hello </Title>
        <hr />

        <MyButton> My Button</MyButton>

        <hr />

        <Btn>Basic</Btn>
        <Btn_red>Red</Btn_red>
        <Btn_green>Green</Btn_green>
        <Btn_yellow>yellow</Btn_yellow>
        <Btn_pink>Pink</Btn_pink>

        <hr />

        <Btn_custom>Custome</Btn_custom>
        <Btn_custom primary>Custome</Btn_custom>


    </div>
  )
}

export default Styled_component