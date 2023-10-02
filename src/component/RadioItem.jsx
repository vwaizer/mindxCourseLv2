import React from 'react'
import { FlexStart } from './Content'
const RadioItem = (props) => {
  return (
    <FlexStart><input type='radio' style={{height:"100%"}}  />
    <div >{props.content}</div>
    </FlexStart>
  )
}

export default RadioItem