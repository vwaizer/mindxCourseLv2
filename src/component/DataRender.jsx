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
      width: 20%;
      
      border-radius:10px;
      background-color:black;
      display:flex;
      flex-direction:column;
      align-items:center;
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
const DataRender = (props) => {
      
      let data=props.data;
      let lengthData=data.length;
      let result=[];
      if(data.length ===0){
        
      }
      else{
        result=[];
        
        for(let i=0;i<lengthData;i++){
        let dt = new Date( (data[i].date));
        let year = dt.getFullYear();
        let month =  (dt.getMonth()+1);
        let day = dt.getDate();
         result.push(
          <div>
            <Container >
            <DateItem>
              
              <div>{month}</div>
              <div>{day}</div>
              <div>{year}</div>
            </DateItem>
            <TittleItem>{data[i].name}</TittleItem>
            <AmountItem>${data[i].amount}</AmountItem>
            </Container>
         </div>)
      }}
      
 

  return(
     <>{result}</>
  )
}

export default DataRender