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
    let percentage=props.percentage;
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