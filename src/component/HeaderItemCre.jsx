import React from 'react'
import styled from 'styled-components';
const HeaderItem=styled.button`
    
    background-color:transparent;
    border:0px;
    font-size:20px;
    height:30px;
    color:black;
    cursor:pointer;
    padding:0;
`;

const HeaderItemCreate = (props) => {
 
  return (
    <>
    <HeaderItem className='headerItem'> {props.title}</HeaderItem>
    
    </>
  )
}

export default HeaderItemCreate