import React from 'react';
import styled from 'styled-components';
import HeaderItemCreate from './HeaderItemCreate';
import FormRender from './FormRender';
const Block=styled.div`
    width:100%;
    height:100%;
    background-color: red;
    

`;
const HeaderContainer=styled.div`
    width:100%;
    height:150px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-top:25px;

`;
const HeaderItemContainer=styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
    
`;

const BannerContainer=styled.div`
    width:100%;
    height:250px;
    display:flex;
    flex-direction:row;
    


`;
const BannerItem=styled.div`
    width:35%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:white;
    gap:12px;
`;



const FlexEnd=styled.div`
    display:flex;
    flex-direction:column;
    
    position:relative;
    bottom:-100px;
    background-color:black;
    
`;

const BodyItem=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:90%;
`;
const ImgContainer=styled.div`
    display:flex;
    flex-direction:row;

`;
const BodyContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:linear-gradient(90deg, rgba(237,216,15,1) 28%, rgba(255,134,18,1) 60%);
    
`;

const ContentContainer=styled.div`
    display:flex;
    flex-direction:row;

`;
const ContentItem=styled.div`
    background-color:white;
    border-radius:10px;
`;

const Content = () => {
    
   
  return (
    <Block >
        

       <BodyContainer >
       <BodyItem>
       <HeaderContainer>
            <div>
                <ImgContainer>
                <img src="" style={{width:"10%"}} alt="picture1" />
                </ImgContainer>
            </div>
            <HeaderItemContainer>
                <HeaderItemCreate title="Blog"></HeaderItemCreate>
                <HeaderItemCreate title="Socials"></HeaderItemCreate>
                <HeaderItemCreate title="Past Social"></HeaderItemCreate>
                <HeaderItemCreate title="Clubs"></HeaderItemCreate>
                <HeaderItemCreate title="Contact"></HeaderItemCreate>
            </HeaderItemContainer>
        </HeaderContainer>
        <BannerContainer>
            <BannerItem>
            <h1 style={{backgroundColor:"purple"}}>Untitle</h1>
            <h1>Event</h1>
            <FormRender/>
            </BannerItem>
            <input type='file'/>
        </BannerContainer>
        
        
        <ContentContainer>
            <div>
                <div>Description</div>
                <input type='text' placeholder='Description of your event' style={{height:"200px"}}/>
            </div>
            <ContentItem>
                <h2 style={{backgroundColor:"yellow",color:"purple"}}>Settings</h2>
                <input type='checkbox'> I want to approve attendees</input>
                <ContentContainer>
                    <input type='radio' />
                    <div>public</div>
                    <input type='radio'/>
                    <div>Curated Audience</div>
                    <input type='radio'/>
                    <div>Community Only</div>
                </ContentContainer>
                <div>Pick tags for our curation engine to work its magin</div>
                <button type='button' style={{backgroundColor:"yellow",color:"purple"}}>Create Social</button>
            </ContentItem>
        </ContentContainer>
        </BodyItem>
       </BodyContainer>



        <FlexEnd>
        
        </FlexEnd>
    </Block>
  )
}

export default Content