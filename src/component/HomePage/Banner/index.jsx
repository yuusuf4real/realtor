import React from 'react';
import { StyledBanner, StyledInBanner1, StyledInBanner2, StyledBannerImg, 
    StyledText1, StyledText2, StyledBannerBtn, StyledBannerBtn2, StyledInput } from './style'
import house from '../../../assets/house.png'

const Banner = () => {
    return <StyledBanner>
                <StyledInBanner1>
                    <StyledText1>Search 216,728 listings from trusted REALTORS®</StyledText1>
                    <StyledText2>If only buying a home was as simple as signing on the dotted line. 
                        A REALTOR® can bring you peace of mind by navagating the complex legal terminology, 
                        paperwork, mortgage rules and more</StyledText2>
                    <StyledBannerBtn>Residential</StyledBannerBtn>
                    <StyledBannerBtn2>Commercial</StyledBannerBtn2><br />
                    <StyledInput defaultValue="Search Listings" type="text" />
                </StyledInBanner1>
                <StyledInBanner2>
                    <StyledBannerImg src={house} />
                </StyledInBanner2>
            </StyledBanner>
}

export default Banner;