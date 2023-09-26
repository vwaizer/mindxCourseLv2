import React from 'react'
import styled from 'styled-components';
const HeaderItem=styled.div`
    color:white;
    
`;
const HeaderItemCreate = (props) => {
    const enterChangeColor=(e)=>{
        e.target.style.color="red";
    }
    const leaveChangeColor=(e)=>{
        e.target.style.color="black";
    }
  return (
    <HeaderItem> <button style={{backgroundColor:"transparent",border:0}} onMouseEnter={enterChangeColor} onMouseLeave={leaveChangeColor}>{props.title} </button></HeaderItem>
  )
}

export default HeaderItemCreate