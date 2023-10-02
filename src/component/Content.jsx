import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderItemCreate from './HeaderItemCreate';
import FormRender from './FormRender';
import logoPic from '../img/header-logo.a4cff821.svg'
import RadioItem from './RadioItem';

const Block = styled.div`
    width:100%;
    height:800px;
`;
const HeaderContainer = styled.div`
    width:100%;
    height:150px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-top:25px;

`;
const HeaderItemContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
    
`;

const BannerContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    


`;
const BannerItem = styled.div`
    width:30%;
    display:flex;
    flex-direction:column;
    color:white;

`;


const AddPictureContainer = styled.div`
    border:2px dashed white;
    width:60%;
    height:90%;
    border-radius:5px;
`;
const FlexEnd = styled.div`
    display:flex;
    flex-direction:column;
    height:50px;
    position:relative;
    bottom:-5px;
    background-color:black;
    
`;

const BodyItem = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:90%;
    
`;
const ImgContainer = styled.div`
    display:flex;
    flex-direction:row;

`;
const BodyContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:linear-gradient(90deg, rgba(237,216,15,1) 28%, rgba(255,134,18,1) 60%);
    width:100%;
    height:100%;
    
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    
    justify-content:space-between;

`;
const ContentBlock = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    gap:50px;
    justify-content:space-between;

`;
const ContentItem = styled.div`
    background-color:white;
    border-radius:10px;
    height:100%;
    width:50%;
    display:flex;
    flex-direction: column;
    justify-content:start;
    

`;
export const FlexStart = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    height:100%;
`;
const Content = () => {
    const [colorButton,setColorButton]=useState("purple");
    const colorChangeEnter=()=>{
            setColorButton("blue");
    }
    const colorChangeLeave=()=>{
            setColorButton("purple");
    }
    const [pageChange,setPageChange]=useState(false);
    return (
        <Block >


            <BodyContainer >
                <BodyItem>
                    <HeaderContainer>
                        <div>
                            <ImgContainer>
                                <img src={logoPic} style={{ width: "100%", height:"100%" }} alt="picture1" />
                            </ImgContainer>
                        </div>
                        <HeaderItemContainer>
                            <HeaderItemCreate title="Blog"></HeaderItemCreate>
                            <HeaderItemCreate title="Socials"></HeaderItemCreate>
                            <HeaderItemCreate title="Past Social"></HeaderItemCreate>
                            <select style={{height:"30px",backgroundColor:"transparent",fontSize:"20px"}}>
                                <option selected hidden >Club</option>
                            </select>
                            <HeaderItemCreate title="Contact"></HeaderItemCreate>
                        </HeaderItemContainer>
                    </HeaderContainer>
                    <BannerContainer>
                        <BannerItem>
                            <div>
                                <h1 style={{ backgroundColor: "purple" }}>Untitle</h1>
                                <h1>Event</h1>
                            </div>
                            <FormRender />
                        </BannerItem>

                        <AddPictureContainer><input type='file' /></AddPictureContainer>

                    </BannerContainer>


                    <ContentBlock>
                        <div style={{ width: "50%", height: "80%" }}>
                            <div>Description</div>
                            <input type='text' placeholder='Description of your event' style={{ height: "100%", width: "100%" }} />
                        </div>
                        <ContentItem>
                            <h2 style={{ backgroundColor: "yellow", color: "purple", width: "30%" }}>Settings</h2>
                            <FlexStart><input type='checkbox' /><div>I want to approve attendees</div></FlexStart>

                            <ContentContainer>
                                {/* <FlexStart><input type='radio' style={{height:"100%"}}  />
                    <div >public</div>
                    </FlexStart>
                   <FlexStart>
                   <input type='radio'/>
                    <div>Curated Audience</div>
                   </FlexStart>
                    <FlexStart>
                    <input type='radio'/>
                    <div>Community Only</div>
                    </FlexStart> */}

                                <RadioItem content="Public" />
                                <RadioItem content="Curated Audience" />
                                <RadioItem content="Community Only" />
                            </ContentContainer>
                            <div>Pick tags for our curation engine to work its magin</div>
                            <button style={{ backgroundColor: "yellow", color: colorButton}} onMouseEnter={colorChangeEnter} onMouseLeave={colorChangeLeave}>Create Social</button>
                        </ContentItem>
                    </ContentBlock>
                </BodyItem>
            </BodyContainer>
            <FlexEnd>

            </FlexEnd>
        </Block>
    )
}

export default Content