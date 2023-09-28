import React from 'react'
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import styled from 'styled-components';
const Container=styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    color:white;
    background-color:purple;
    
`;
const VerticalProcess = (props) => {
    let dataBase=props.data;
    let sum=0;

    
    
    
    let percentage=[0,0,0,0,0,0,0,0,0,0,0,0];
    if(dataBase.length !==0){
      for(let k=0;k<dataBase.length;k++){
        sum+=dataBase[k].amount;
      }
      for(let i=0;i<dataBase.length;i++){
  
        let dt = new Date( (dataBase[i].date));
        let month =  (dt.getMonth() < 10 ? '0' : '') + (dt.getMonth()+1);
        percentage[month-1]=+dataBase[i].amount;
      }
  
      for(let j=0;j<12;j++){
          percentage[j]=Math.floor(percentage[j]/sum *100);
      }
    }
    
  return (
    <Container>
    <div>
    <Progress.Line percent={percentage}  vertical={true}></Progress.Line>
    <div>Monday</div>
    </div>
    <div>
    <Progress.Line percent={percentage}  vertical={true}></Progress.Line>
    <div>Tuesday</div>
    </div>
    <div>
    <Progress.Line percent={percentage}  vertical={true}></Progress.Line>
    <div>Wednesday</div>
    </div>
    <div>
    <Progress.Line percent={percentage}  vertical={true}></Progress.Line>
    <div>Thursday</div>
    </div>
    <div>
    <Progress.Line percent={percentage}  vertical={true}></Progress.Line>
    <div>Friday</div>
    </div>
    <div>
    <Progress.Line percent={percentage}  vertical={true}></Progress.Line>
    <div>Saturday</div>
    </div>
    <div>
    <Progress.Line percent={percentage}  vertical={true}></Progress.Line>
    <div>Sunday</div>
    </div>
    </Container>
  )
}

export default VerticalProcess