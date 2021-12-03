import React from 'react';

import { StyleSignUp, StyledInSignUp1, StyledInSignUp2, StyledHeading, 
        StyledNote, StyledGetStarted, StyledSignIn, StyledMeet, 
        StyledMeetImg, StyledMeetNote } from './style'
import realtor from '../../../assets/realtor.jpg'

const Meet = () => {
    return (
        <StyleSignUp>
            <StyledInSignUp1>
                <StyledMeet>Meet A Realtor</StyledMeet>
                <StyledMeetImg src={realtor} />
                <StyledMeetNote>
                If you're looking for a home, choosing a REALTOR® should be your first step.
                REALTOR App can connect you with REALTORS® to find somewhere that’s the right fit for you!
                </StyledMeetNote>
            </StyledInSignUp1>
            <StyledInSignUp2>
                <StyledHeading>How it works</StyledHeading>
                <StyledNote>
                REALTOR is the most popular and most trusted real estate WebApp in Nigeria. 
                certified and adopted by the Nigerian Real Estate Association (CREA), REALTOR 
                provides up-to-date and reliable information that makes finding your dream 
                property easy and enjoyable.<br /><br /> REALTOR.ng is popular with sellers, buyers, and 
                renters and is accessible online and on mobile devices.
                </StyledNote>
                <StyledGetStarted>Get Started</StyledGetStarted>
                <StyledSignIn>Sign In</StyledSignIn>
            </StyledInSignUp2>
        </StyleSignUp>
    )
}

export default Meet