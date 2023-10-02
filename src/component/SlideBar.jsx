import React from 'react';
import {styled} from "styled-components";
import SlideBarContent from './SlideBarContent';

export const FlexContent = styled.div`
    display: flex;
    flex-direction:column;
    
    gap:15px;
    
    border:0;
    border-radius:15px;
    padding:5px;

`;
export const Flex=styled.div`
        display: flex;
    flex-direction:column;
    width:40%;
        margin:10px;
    margin-top:20px;
    border:2px solid gray;
    border-radius:15px;
    
`;
export const Container=styled.div`
    
    background-color: white;
    width:100%;
    margin:10px;

`;

export const Block=styled.div`
    border: 2px solid yellow;
    padding: 4px;
    height:150px;
    width:100%;

`;
export const HeaderBlock=styled.div`
    background-color:skyblue;
    color:white;
    border-radius:10px;
    height:30px;
    text-align:justify;
    font-size:25px;
`;
const SlideBar = () => {
  return (
    <>
    <Flex>
        <HeaderBlock>Benefits of being a member</HeaderBlock>
        <FlexContent>
        <SlideBarContent>Find something to watch on your subscribed streaming services </SlideBarContent>
        <SlideBarContent> Log the movies and TV shows you have watched</SlideBarContent>
        <SlideBarContent>Keep track of your favorite movies and TV shows and get recommendations from them </SlideBarContent>
        <SlideBarContent>Build and maintain a personal watchlist </SlideBarContent>
        <SlideBarContent>Build custom mixed lists(movies and TV) </SlideBarContent>
        <SlideBarContent>Take part in movie and TV discussion </SlideBarContent>
        <SlideBarContent>Contribute to and improve the information in your database </SlideBarContent>
        </FlexContent>
    </Flex>
    </>
  )
}

export default SlideBar