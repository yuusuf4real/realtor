import React from 'react';

import {StyledHeader, StyledSignUp, StyledSignIn, StyledMenu, StyledLogo} from './style'
import logo from '../../../assets/logo.png'

const Header = () => {
    return <StyledHeader>
                <StyledSignUp>Sign Up</StyledSignUp>
                <StyledSignIn>Sign in</StyledSignIn>
                <StyledMenu>
                <p>Home&nbsp;&nbsp;&nbsp; About Us&nbsp;&nbsp;&nbsp; Meet A Realtor</p>
                </StyledMenu>
                <StyledLogo src={logo} />
            </StyledHeader>

}

export default Header;