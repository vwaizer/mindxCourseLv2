import React, { useState } from 'react'
import styled from 'styled-components';
const Display=styled.div`
    border:2px solid gray;
    border-radius:5px;
    color:black;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

const DisplayItem = (props) => {
    const [display,setDisplay]=useState(true);
    const deleteItem=()=>{
        setDisplay(false)
    }
  return (
    <>
        { display?<Display>
        <div>{props.title}</div>
        <button onClick={deleteItem} style={{backgroundColor:"transparent",border:"0"}}>x</button>
    </Display>:<></>}
    </>
  )
}

export default DisplayItem