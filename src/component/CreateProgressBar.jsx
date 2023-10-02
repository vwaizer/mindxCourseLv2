import React from 'react'
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";
const CreateProgressBar = (props) => {
  return (
    <div>
    <Progress.Line percent={props.data} vertical={true}></Progress.Line>
    <div>{props.title}</div>
  </div>
  )
}

export default CreateProgressBar