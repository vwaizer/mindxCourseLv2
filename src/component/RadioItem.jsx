import React, { useState } from 'react';
import { Radio } from 'antd';
const RadioItem = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
  
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Public</Radio>
      <Radio value={2}>Curated Audience</Radio>
      <Radio value={3}>Community Only</Radio>
      
    </Radio.Group>
  );
};
export default RadioItem;