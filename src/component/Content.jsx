import React from 'react';
import {styled} from "styled-components";
import PlaceOfButton from './PlaceOfButton';
export const Flex = styled.div`
    display: flex;
    justify-content:end;
    
    gap:10px;
    
`;
export const Container=styled.div`
    
    
    width:100%;
    margin:10px;
    

`;

export const Block=styled.div`
    
   

`;

export const RevealButton =styled.div`
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
        
        background-color:red;
`;


  
const Content = () => {
   
    return (
        <>
    
            <PlaceOfButton></PlaceOfButton>
        
        
        </>
  )
};

export default Content