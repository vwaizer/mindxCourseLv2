import React, { useState } from 'react';
import styled from 'styled-components';
import DisplayButton from './DisplayButton';
const ButtonItem = styled.div`
  border-radius: 10px;
  background-color: gray;
  color: black;
  padding: 2px;
`;
const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`;

const ButtonRender = () => {
  const [displayList, setDisplayList] = useState([]);
  const [render, setRender] = useState(false);
  console.log(displayList);
  const productOnClick = () => {
    setDisplayList([...displayList, 1]);
    setRender(true);
  };
  const marketingOnClick = () => {
    setDisplayList([...displayList, 2]);
    setRender(true);
  };
  const engineerOnClick = () => {
    setDisplayList([...displayList, 3]);
    setRender(true);
  };
  const designOnClick = () => {
    setDisplayList([...displayList, 4]);
    setRender(true);
  };
  return (
    <>
      {displayList.length === 0 ? (
        <div></div>
      ) : render ? (
        <>
          <DisplayButton dataBase={displayList} />
        </>
      ) : (
        <></>
      )}
        
      <DisplayContainer>
        <ButtonItem onClick={productOnClick}>Product</ButtonItem>
        <ButtonItem onClick={marketingOnClick}>Marketing</ButtonItem>
        <ButtonItem onClick={engineerOnClick}>Engineering</ButtonItem>
        <ButtonItem onClick={designOnClick}>Design</ButtonItem>
      </DisplayContainer>
    </>
  );
};

export default ButtonRender;
