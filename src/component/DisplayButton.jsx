import React from 'react';
import styled from 'styled-components';
import DisplayItem from './DisplayItem';
const DisplayArea = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
`;

const DisplayButton = (props) => {
  const dataSet = ['Product', 'Marketing', 'Engineering', 'Design'];
  // const [data,setData]=useState(props.dataBase);
  const data = props.dataBase;
  console.log(data);
  const renderData = data.map((item, index) => {
    return (
      <>
        <DisplayItem title={dataSet[item - 1]} />
      </>
    );
  });
  return <DisplayArea>{renderData}</DisplayArea>;
};

export default DisplayButton;
