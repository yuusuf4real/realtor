import React from 'react';

import {StyledHeader, StyledSignUp, StyledSignIn, StyledMenu, StyledLogo} from './style'
import logo from '../../../assets/logo.png'

const Header = () => {
    return <StyledHeader>
                <StyledLogo src={logo} />
                <StyledSignUp>Sign Up</StyledSignUp>
                <StyledSignIn>Sign in</StyledSignIn>
                <StyledMenu>
                <p>Home&nbsp;&nbsp;&nbsp; About Us&nbsp;&nbsp;&nbsp; Meet A Realtor </p>
                </StyledMenu>
                
            </StyledHeader>

}

export default Header;