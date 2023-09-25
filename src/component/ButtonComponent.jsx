import React from 'react';
const ButtonComponent=(props)=>{
    let backgroundValue=props.backgroundValue;
    return(
        <>
        <button type='button' onClick={props.buttonFunc} style={{backgroundColor: backgroundValue,color: props.textColor,borderRadius:"5px",border:"0" }}>{props.children}</button>
        </>
    )
};

export default ButtonComponent