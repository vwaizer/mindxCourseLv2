import React from 'react'

const InputContent=(props) =>{
    return(
        <>
            <div>{props.title}</div>
            <input type={props.inputType} style={{width:"80%"}}></input>
        </>
    )
};
export default InputContent