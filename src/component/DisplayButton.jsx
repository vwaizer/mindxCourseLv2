import React from 'react'
import styled from 'styled-components'

const DisplayArea=styled.div`
    display:flex;
    flex-direction:row;
`;
const DisplayItem=styled.div`
    background-color:gray;
    border-radius:5px;
    color:black;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;
const DisplayButton = (props) => {
    let data=props.dataBase;
    const deleteItem=(index)=>{
        console.log("da bam");
    }
    console.log(data);  
    let arrList=[];  
    for(let index=0;index<data.length;index++){
        (data[index]===1)?
           arrList.push( <>
            <DisplayItem>
                <div>Product</div>
                <button onClick={(index)=>deleteItem(index)} style={{backgroundColor:"transparent",border:"0"}}>x</button>
            </DisplayItem>
            
            </>)
        :
         (data[index] ===2)?
           arrList.push(<>
            <DisplayItem>
                <div>Marketing</div>
                <button onClick={(index)=>deleteItem(index)} style={{backgroundColor:"transparent",border:"0"}}>x</button>
            </DisplayItem>
            
            </>)
        :
        (data[index] === 3)?
            arrList.push(<>
            <DisplayItem>
                <div>Engineering</div>
                <button onClick={(index)=>deleteItem(index)} style={{backgroundColor:"transparent",border:"0"}}>x</button>
            </DisplayItem>
            
            </>)
        :
        (data[index] === 4)?
           arrList.push( <>
            <DisplayItem>
                <div>Design</div>
                <button onClick={(index)=>deleteItem(index)} style={{backgroundColor:"transparent",border:"0"}}>x</button>
            </DisplayItem>
            
            </>)
        :<></>
        
    };
  return (
    <DisplayArea>
        {arrList}
        
      
    </DisplayArea>
  )
}

export default DisplayButton