import React from 'react'

const ButtonComponent=(props)=>{
    let backgroundValue=props.backgroundValue;
    return(
        <button type='button' style={{backgroundColor: backgroundValue,color: props.textColor,borderRadius:"15px",border:"0",width:"100px" }}>{props.children}</button>
    )
};

export default ButtonComponent