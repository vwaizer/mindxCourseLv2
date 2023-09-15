import React from 'react';
import {styled} from "styled-components";
import InputContent from './InputContent';
import ButtonComponent from './ButtonComponent';
export const Flex = styled.div`
    display: flex;
    width:100%;
    height:40px;
    margin:10px;
    margin-top:20px;
`;
export const Container=styled.div`
    
    background-color: white;
    width:100%;
    margin:10px;

`;

export const Block=styled.div`
    border: 2px solid yellow;
    padding: 4px;
    height:150px;
    width:100%;

`;


const Content = () => {
   
    return (
        <Container>
            <Container><h2> Sign up for an account</h2></Container>
            <Container><div>Signing up for an account is free and easy.Fill out the form below to get started.JavaScript is required to continue. </div></Container>
            <Container><InputContent title="Username" inputType="text"></InputContent></Container>
            <Container><InputContent title="Password(4 characters minimum)" inputType="password"></InputContent></Container>
            <Container> <InputContent title="Password Confirm" inputType="password"></InputContent></Container>
            <Container><InputContent title="Email" inputType="email"></InputContent></Container>
            <Container><div>By clicking the "Sign up" button below, i certify that i have read and agree to the TMDB terms of use and privacy policy</div></Container>
            
            <Flex>
                <ButtonComponent backgroundValue="blue" textColor="white">Đăng ký </ButtonComponent>
                <ButtonComponent backgroundValue="white" textColor="blue">Cancel</ButtonComponent>
            </Flex>

        </Container>
  )
};

export default Content