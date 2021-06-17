import React from 'react';

import { StyledGall, StyledHeading, StyledListing1, StyledListing2, StyledListing3, 
        StyledListingImg1, StyledListingTxt1, StyledListingImg2, StyledListingTxt2, 
        StyledListingImg3, StyledListingTxt3, StyledGallImg1, StyledGallImg2, 
        StyledGallImg3, StyledGallPrice1, StyledGallAddr1, StyledGallDes1, 
        StyledGallRealtor1, StyledGallPrice2, StyledGallAddr2, StyledGallDes2, 
        StyledGallRealtor2, StyledGallPrice3, StyledGallAddr3, StyledGallDes3, StyledGallRealtor3 } from './style'
import listing1 from '../../../assets/listing1.jpg';
import listing2 from '../../../assets/listing2.jpg';
import listing3 from '../../../assets/listing3.jpg';

const Galleries = () => {
    return (
        <StyledGall>
            <StyledHeading>Recent Listings</StyledHeading>
            <StyledListing1>
                <StyledListingImg1>
                    <StyledGallImg1 src={listing1} />
                </StyledListingImg1>
                <StyledListingTxt1>
                    <StyledGallPrice1>#150,000,000</StyledGallPrice1>
                    <StyledGallAddr1>PackView Estate, Chevron Drive, Lekki Phase1</StyledGallAddr1>
                    <StyledGallDes1>3 Bedsrooms&nbsp;&nbsp; 2 Baths</StyledGallDes1><br />
                    <StyledGallRealtor1>Kola Real Ventures</StyledGallRealtor1>
                </StyledListingTxt1>
            </StyledListing1>

            <StyledListing2>
                <StyledListingImg2>
                    <StyledGallImg2 src={listing2} />
                </StyledListingImg2>
                <StyledListingTxt2>
                <StyledGallPrice2>#220,000,000</StyledGallPrice2>
                    <StyledGallAddr2>Ariyib Crescent, Admiralty Way, Lekki Phase1</StyledGallAddr2>
                    <StyledGallDes2>3 Bedsrooms&nbsp;&nbsp; 2 Baths</StyledGallDes2><br />
                    <StyledGallRealtor2>Adron Homes</StyledGallRealtor2>
                </StyledListingTxt2>
            </StyledListing2>

            <StyledListing3>
                <StyledListingImg3>
                    <StyledGallImg3 src={listing3} />
                </StyledListingImg3>
                <StyledListingTxt3>
                    <StyledGallPrice3>#250,000,000</StyledGallPrice3>
                    <StyledGallAddr3>Orseborne Drive, Orseborne Estate, Ikoyi, Lagod</StyledGallAddr3>
                    <StyledGallDes3>3 Bedsrooms&nbsp;&nbsp; 2 Baths</StyledGallDes3><br />
                    <StyledGallRealtor3>Homes And Hormses</StyledGallRealtor3>
                </StyledListingTxt3>
            </StyledListing3>
        </StyledGall>
    )
}

export default Galleries;