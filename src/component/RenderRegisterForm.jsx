import React from 'react';
import styled from 'styled-components';
import InputContent from './InputContent';



export const Flex = styled.div`
    display: flex;
    justify-content:end;
    width:450px;
    gap:10px;
    
`;
export const Container=styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;
    height:100%;
    
    /* margin:10px; */
    background-color:purple;
    border-radius:10px;
    
`;

const RenderForm = () => {
    
  return (
    <>
        <Container>
           
           <InputContent title="Name" inputType="text"></InputContent>
            <InputContent title="Amount" inputType="number"></InputContent>
           <InputContent title="Date" inputType="date"></InputContent>
           {/* <Flex>
               <ButtonComponent backgroundValue="red" textColor="white" buttonFunc={onClickFunc}>Add </ButtonComponent>
               <ButtonComponent backgroundValue="gray" textColor="black" buttonFunc={cancelFunc}>Cancel</ButtonComponent>
           </Flex> */}
           
  
            
        </Container>

        <Container>
        
        </Container>
      
    </>

  )
}

export default RenderForm