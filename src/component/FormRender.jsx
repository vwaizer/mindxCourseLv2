import React from 'react'
import styled from 'styled-components'
import calendarLogo from '../img/calender-svgrepo-com.png';
import timeLogo from '../img/time-svgrepo-com.png';
import locationLogo from '../img/location-svgrepo-com.png';
import groupLogo from '../img/group-svgrepo-com.png';
import dollarLogo from '../img/dollar-svgrepo-com.png';
const InputContainer = styled.div`
        display:flex;
        flex-direction:row;
        width:100%;
        justify-content:space-evenly;

        
`;
const InputBlock = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
`;
const FormRender = () => {
    return (
        <InputBlock>
            <InputContainer>
                <InputContainer>
                    <img src={calendarLogo} alt="" style={{ width: "20%", height: "40%" }} />
                    <input type='date' placeholder='Date' style={{ width: "50%", height: "50%" }} />
                </InputContainer>
                <InputContainer>
                    <img src={timeLogo} alt="" style={{ width: "20%", height: "40%" }} />
                    <input type='time' placeholder='Time' style={{ width: "50%", height: "50%" }} />
                </InputContainer>
            </InputContainer>

            <InputContainer>
                <img src={locationLogo} alt="" style={{ width: "20%", height: "40%" }} />
                <input type='text' placeholder='Venue' style={{width:"100%",height:"40px"}}></input>
            </InputContainer>
            <InputContainer>

                <InputContainer>
                    <img src={groupLogo} alt="" style={{ width: "20%", height: "40%" }} />
                    <input type='text' placeholder="Max capacity" style={{width:"50%",height:"50%"}}></input>
                </InputContainer>
                <InputContainer>
                    <img src={dollarLogo} alt="" style={{ width: "20%", height: "40%" }} />
                    <input type='text' placeholder='Cost per person' style={{width:"50%",height:"50%"}}></input>

                </InputContainer>
            </InputContainer>
        </InputBlock>
    )
}

export default FormRender