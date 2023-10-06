import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderItemCreate from './HeaderItemCreate';
import FormRender from './FormRender';
import logoPic from '../img/header-logo.a4cff821.svg';
import RadioItem from './RadioItem';
import ButtonRender from './ButtonRender';

const Block = styled.div`
  width: 1500px;
  height: fit-content;
  padding: 0;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0px;
`;
const HeaderItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BannerItem = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  color: white;
`;

const AddPictureContainer = styled.div`
  border: 2px dashed white;

  height: 90%;
  border-radius: 10px;
`;
const FlexEnd = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  position: relative;
  bottom: -50px;
  background-color: black;
`;

const BodyItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(237, 216, 15, 1) 28%, rgba(255, 134, 18, 1) 60%);
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 40px;
  justify-content: start;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
  justify-content: space-between;
`;
const ContentItem = styled.div`
  background-color: white;
  border-radius: 10px;
  gap: 10px;
  width: 51%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: start;
`;
export const FlexStart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
`;
const data = {
  date: 'October 11, Wed',
  time: '7 PM',
  venue: 'Chelsea Market (163 W 20nd Street). Manhattan, NYC',
  people: '50 people',
  dollar: '$30',
};
const ButtonItem = styled.button`
  border-radius: 10px;
  background-color: yellow;
  color: blue;
  margin-left: 75px;
  height: 50px;
  width: 705px;
`;

const context =
  'Calling all web3 founders and designers for an exciting night of exchanging ideas and making new friends! Come make friends with fellow designers and founders in web3. There will also be lots of insights to be gained through an intimate chat +Q&A with two giants in the industry:Phil Hedayatnia, Founder & CEO of Airfoil, a growth design studio that has designed and built products in web3, the creator economy, the future of work, and much more for 80+ startups since 2018 Jihoon Suh, Senior Product Designer at Coinbase, who was previously Senior Product Designer for Messenger for Meta.This will be a curated group with limited spots, so do sign up early!About Airfoil:Airfoil Studio is the design, branding, and engineering team helping web3 take flight. As one of crypto’s first large-scale design firms, our mission is to design a friendlier financial layer for the internet. We’re a team of 85+ creatives, working from Airfoil’s hubs in Toronto, Singapore, and Seoul, who’ve worked on 100+ projects since 2018, including Solana Pay, Drift Protocol, Bonfida Solana Name Service, Utopia Labs, Planetarium, Layer3.xyz, MarginFi, Hyperspace, VBA Game, and more.Learn more about Airfoil and our work at airfoil.studio.';
const Content = () => {
  const [pageChange, setPageChange] = useState(false);
  return (
    <Block>
      <BodyContainer>
        <BodyItem>
          <HeaderContainer>
            <div>
              <ImgContainer>
                <img src={logoPic} style={{ width: '100%', height: '100%' }} alt="picture1" />
              </ImgContainer>
            </div>
            <HeaderItemContainer>
              <HeaderItemCreate title="Blog" />
              <HeaderItemCreate title="Socials" />
              <HeaderItemCreate title="Past Social" />
              <select style={{ height: '30px', backgroundColor: 'transparent', fontSize: '20px' }}>
                <option selected hidden>
                  Club
                </option>
              </select>
              <HeaderItemCreate title="Contact"></HeaderItemCreate>
            </HeaderItemContainer>
          </HeaderContainer>

          <BannerContainer>
            <BannerItem>
              {pageChange ? (
                <div>
                  <h1 style={{ backgroundColor: 'purple' }}>
                    Web3 Founders & Designers Mixer + fireside chat with Coinbase Senior Designer &
                    Airfoil founder
                  </h1>
                </div>
              ) : (
                <div>
                  <h1 style={{ backgroundColor: 'purple' }}>Untitle</h1>
                  <h1>Event</h1>
                </div>
              )}

              {pageChange ? <FormRender data={data} /> : <FormRender />}
            </BannerItem>

            <AddPictureContainer>
              {pageChange ? (
                <img
                  src="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/image?url=https%3A%2F%2Fsupermomos-app-resources-us.s3.amazonaws.com%2FImages%2FSocialBanner%2Fbanner_1.jpg&w=750&q=75"
                  alt="banner"
                />
              ) : (
                <input type="file" style={{ height: '300px', width: '800px' }} />
              )}
            </AddPictureContainer>
          </BannerContainer>

          <ContentBlock>
            {pageChange ? (
              <div style={{ width: '50%' }}>{context}</div>
            ) : (
              <>
                <div style={{ width: '52%', height: '80%' }}>
                  <div>Description</div>
                  <input
                    type="text"
                    placeholder="Description of your event"
                    style={{ height: '150px', width: '100%' }}
                  />
                </div>
                <ContentItem>
                  <h2 style={{ backgroundColor: 'yellow', color: 'purple', width: '30%' }}>
                    Settings
                  </h2>
                  <FlexStart>
                    <input type="checkbox" />
                    <div>I want to approve attendees</div>
                  </FlexStart>
                  <div>Privacy</div>
                  <ContentContainer>
                    <RadioItem content="Public" />
                    <RadioItem content="Curated Audience" />
                    <RadioItem content="Community Only" />
                  </ContentContainer>
                  <div>Pick tags for our curation engine to work its magin</div>
                  <div>Tag your social</div>
                  <ButtonRender />
                </ContentItem>
              </>
            )}
          </ContentBlock>
        </BodyItem>
      </BodyContainer>

      {pageChange ? (
        <></>
      ) : (
        <>
          <ButtonItem className="buttonItem" onClick={() => setPageChange(true)}>
            Create Social
          </ButtonItem>
          <FlexEnd></FlexEnd>
        </>
      )}
    </Block>
  );
};

export default Content;
