import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
    
    display:flex;
    flex-direction:row;
    justify-content:space-between;
      width:100%;
    height:100%;
    align-items:center;
    /* margin:10px; */
    background-color:gray;
    
`;
const DateItem=styled.div`
      width: 30%;
      height:100px;
      border-radius:10px;
      background-color:black;
      
      color:white;
`;
const TittleItem=styled.div`
     width:50%;
     background-color:gray;
     border-radius:10px;
     color:white;
     font-size:35px;

`;
const AmountItem=styled.div`
    height:fit-content;
    width:50px;
    text-align:center;
    background-color:purple;
    border-radius:10px;
    color:white;
    border:2px solid white;

`;
const DataRender = ({data}) => {
      
      
      let lengthData=data.length;
      let result=[];
      let day;
      let month;
      let year;
      for(let i=0;i<lengthData;i++){
        data[i].filter === false? result.push(
          <>
            <Container >
            <DateItem>{data[i].date}</DateItem>
            <TittleItem>{data[i].name}</TittleItem>
            <AmountItem>${data[i].amount}</AmountItem>
            </Container>
         </>): <></>
      }
 

  return(
     <>{result}</>
  )
}

export default DataRender