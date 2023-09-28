import React from 'react'
import styled from 'styled-components';
const HeaderItem=styled.div`
    color:white;
    background-color:transparent;
    border:0px;
    
`;
const HeaderItemCreate = (props) => {
    const enterChangeColor=(e)=>{
        e.target.style.color="red";
    }
    const leaveChangeColor=(e)=>{
        e.target.style.color="white";
    }
  return (
    <>
    <HeaderItem> <button style={{backgroundColor:"transparent",border:0,fontSize:"20px",color:"white"}} onMouseEnter={enterChangeColor} onMouseLeave={leaveChangeColor}>{props.title} </button></HeaderItem>
    
    </>
  )
}

export default HeaderItemCreate