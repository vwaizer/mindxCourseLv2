import React from 'react'
import styled from 'styled-components';
const InputContainer=styled.div`
    display:flex;
    flex-direction:row;
    margin:10px;
    gap:20px;
`;
const InputContent=(props) =>{

    return(
        <InputContainer>
            <div style={{width:"100px",color:"white"}}>{props.title}</div>

            <input type={props.inputType} style={{width:"330px"} } id={props.title}  placeholder={props.title}></input>
            
        </InputContainer>
    )
};
export default InputContent