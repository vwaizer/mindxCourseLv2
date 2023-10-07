import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
        display:flex;
        flex-direction:row;
        margin:10px;
   
        justify-content:space-between;
        align-items:center;

        
`;
const InputBlock = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
   
        
        
       

`;
const InputContainerVenue=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:start;
    padding-left:15px;
    padding-right:15px;
`;
const FormRender = (props) => {
    let hasProps=false;
    if (props.data){
        hasProps=true;
    }
    return (
        <InputBlock>
            <InputContainer>
                <InputContainer>
                    <img src="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-date.cf31b5b1.svg" alt=""  />
                    {hasProps? <div>{props.data.date}</div> :<input type='date' placeholder='Date' style={{ width: "70%", height: "50%" }} />}
                </InputContainer>

                <InputContainer>
                    <img src="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-time.0e52cc09.svg" alt=""  />
                    { hasProps? <div>{props.data.time}</div>:<input type='time' placeholder='Time' style={{ width: "70%", height: "50%" }} />}
                </InputContainer>
            </InputContainer>

            <InputContainerVenue >
                
                <InputContainer><img src="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-address.634396fa.svg" alt=""  /></InputContainer>
                {hasProps? <div>{props.data.venue}</div> :<input type='text' placeholder='Venue' style={{width:"100%"}}></input>}
            </InputContainerVenue>
            <InputContainer>

                <InputContainer>
                    <img src="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-maxcacipi.35d06c6a.svg" alt=""  />
                    {hasProps? <div>{props.data.people}</div>:<input type='text' placeholder="Max capacity" style={{width:"70%",height:"50%"}}></input>}
                </InputContainer>
                <InputContainer>
                    <img src="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-cost.0cbac456.svg" alt=""  />
                    {hasProps? <div>{props.data.dollar}</div>:<input type='text' placeholder='Cost per person' style={{width:"70%",height:"50%"}}></input>}

                </InputContainer>
            </InputContainer>
        </InputBlock>
    )
}

export default FormRender