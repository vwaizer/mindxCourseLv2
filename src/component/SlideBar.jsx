import React from 'react';
import {styled} from "styled-components";
import SlideBarContent from './SlideBarContent';

export const Flex = styled.div`
    display: flex;
    flex-direction:column;
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
export const HeaderBlock=styled.div`
    background-color:blue;
    color:white;
`;
const SlideBar = () => {
  return (
    <Flex>
        <HeaderBlock>Benefit of being a member</HeaderBlock>
        <SlideBarContent></SlideBarContent>
    </Flex>
  )
}

export default SlideBar