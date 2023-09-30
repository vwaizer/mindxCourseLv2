import React from 'react'
import styled from 'styled-components'
import calendarLogo from '../img/calender-svgrepo-com.png';
import timeLogo from '../img/time-svgrepo-com.png';
import locationLogo from '../img/location-svgrepo-com.png';
import groupLogo from '../img/group-svgrepo-com.png';
import dollarLogo from '../img/dollar-svgrepo-com.png';
const InputContainer=styled.div`
        display:flex;
        flex-direction:row;
        
`;
const FormRender = () => {
  return (
    <div>
        <InputContainer>
            <InputContainer>
                <img src={calendarLogo} alt="" />
                <input type='date' placeholder='Date'/>
            </InputContainer>
            <InputContainer>
            <img src={timeLogo} alt="" />
                <input type='time' placeholder='Time'/>
            </InputContainer>
        </InputContainer>

        <InputContainer>
            <img src={locationLogo} alt="" />
            <input type='text' placeholder='Venue'></input>
        </InputContainer>
        <InputContainer>

        <InputContainer>
                <img src={groupLogo} alt="" />
                <input type='text' placeholder="Max capacity"></input>
            </InputContainer>
            <InputContainer>
            <img src={dollarLogo} alt="" />
                <input type='text' placeholder='Cost per person'></input>
            </InputContainer>
        </InputContainer>
    </div>
  )
}

export default FormRender