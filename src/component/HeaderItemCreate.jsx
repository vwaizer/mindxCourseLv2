import React from 'react'
import styled from 'styled-components';
const HeaderItem=styled.div`
    color:white;
    background-color:red;
    border:0px;
    
`;
const HeaderItemCreate = (props) => {
    const enterChangeColor=(e)=>{
        e.target.style.color="blue";
    }
    const leaveChangeColor=(e)=>{
        e.target.style.color="black";
    }
  return (
    <>
    <HeaderItem> <button style={{backgroundColor:"transparent",border:0,fontSize:"20px",color:"black",cursor:"pointer"}} onMouseEnter={enterChangeColor} onMouseLeave={leaveChangeColor}>{props.title} </button></HeaderItem>
    
    </>
  )
}

export default HeaderItemCreate