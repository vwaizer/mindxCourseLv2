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
    
    for(let k=0;k<dataBase.length;k++){
      sum+=dataBase[k].amount;
    }
    
    let percentage=[0,0,0,0,0,0,0,0,0,0,0,0];
    for(let i=0;i<dataBase.length;i++){
      let dt = new Date( (dataBase[i].date));
      let month =  (dt.getMonth() < 10 ? '0' : '') + (dt.getMonth()+1);
      percentage[month-1]=+dataBase[i].amount;
    }

    for(let j=0;j<12;j++){
        percentage[j]=Math.floor(percentage[j]/sum *100);
    }
    console.log(percentage);
  return (
    <Container>
    <div>
    <Progress.Line percent={percentage[0]}  vertical={true}></Progress.Line>
    <div>Jan</div>
    </div>
    <div>
    <Progress.Line percent={percentage[1]}  vertical={true}></Progress.Line>
    <div>Feb</div>
    </div>
    <div>
    <Progress.Line percent={percentage[2]}  vertical={true}></Progress.Line>
    <div>March</div>
    </div>
    <div>
    <Progress.Line percent={percentage[3]}  vertical={true}></Progress.Line>
    <div>April</div>
    </div>
    <div>
    <Progress.Line percent={percentage[4]}  vertical={true}></Progress.Line>
    <div>May</div>
    </div>
    <div>
    <Progress.Line percent={percentage[5]}  vertical={true}></Progress.Line>
    <div>June</div>
    </div>
    <div>
    <Progress.Line percent={percentage[6]}  vertical={true}></Progress.Line>
    <div>July</div>
    </div>
    <div>
    <Progress.Line percent={percentage[7]}  vertical={true}></Progress.Line>
    <div>August</div>
    </div>
    <div>
    <Progress.Line percent={percentage[8]}  vertical={true}></Progress.Line>
    <div>September</div>
    </div>
    <div>
    <Progress.Line percent={percentage[9]}  vertical={true}></Progress.Line>
    <div>October</div>
    </div>
    <div>
    <Progress.Line percent={percentage[10]}  vertical={true}></Progress.Line>
    <div>November</div>
    </div>
    <div>
    <Progress.Line percent={percentage[11]}  vertical={true}></Progress.Line>
    <div>December</div>
    </div>
    </Container>
  )
}

export default VerticalProcess