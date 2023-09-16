import React from 'react';
import {styled} from "styled-components";
const Flex= styled.div `
  display: flex;
  flex-direction:row;
`;
const SlideBarContent = (props) => {
  return (
    <Flex>
    <div style={{color:"green"}}>&#10003; </div>
    <div>{props.children}</div>
    </Flex>
  )
}

export default SlideBarContent