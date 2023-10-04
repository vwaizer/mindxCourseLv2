import React from 'react'
import "rsuite/dist/rsuite.min.css";
import styled from 'styled-components';
import CreateProgressBar from './CreateProgressBar';
const Container = styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    color:white;
    background-color:purple;
    
`;
const VerticalProcess = (props) => {
  let dataBase = props.data;
  let sum = 0;
  let percentage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (dataBase.length !== 0) {
    for (let k = 0; k < dataBase.length; k++) {
      sum += parseInt(dataBase[k].amount);
    }
    console.log(sum);
    for (let i = 0; i < dataBase.length; i++) {

      let dt = new Date((dataBase[i].date));
      let month = (dt.getMonth() + 1);
      percentage[month - 1] += parseInt(dataBase[i].amount);  
    }
    console.log(percentage);
    for (let j = 0; j < 12; j++) {
      if (percentage[j] !== 0) { percentage[j] =  Math.floor( percentage[j] / sum * 100); }

    }
  }

  return (
    <Container>
      <CreateProgressBar title="Jan" data={percentage[0]}></CreateProgressBar>

      <CreateProgressBar title="Feb" data={percentage[1]}></CreateProgressBar>

      <CreateProgressBar title="Mar" data={percentage[2]}></CreateProgressBar>

      <CreateProgressBar title="April" data={percentage[3]}></CreateProgressBar>

      <CreateProgressBar title="May" data={percentage[4]}></CreateProgressBar>

      <CreateProgressBar title="Jun" data={percentage[5]}></CreateProgressBar>

      <CreateProgressBar title="July" data={percentage[6]}></CreateProgressBar>

      <CreateProgressBar title="August" data={percentage[7]}></CreateProgressBar>

      <CreateProgressBar title="Sep" data={percentage[8]}></CreateProgressBar>

      <CreateProgressBar title="Oct" data={percentage[9]}></CreateProgressBar>

      <CreateProgressBar title="Nov" data={percentage[10]}></CreateProgressBar>

      <CreateProgressBar title="Dec" data={percentage[11]}></CreateProgressBar>





































    </Container>

  )

}
export default VerticalProcess