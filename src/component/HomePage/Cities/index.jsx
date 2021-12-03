import React from 'react';
import { StyledCities, StyledCityImg, StyledPopularCities, StyledCitiesA, 
        StyledCitiesB, StyledCitiesC, StyledCitiesItems } from './style'
import city from '../../../assets/city.jpg'

const Cities = () => {
    return (
        <StyledCities>
            <StyledCityImg src={city} />
            <StyledPopularCities>Popular Cities</StyledPopularCities>
            <StyledCitiesA>
                <StyledCitiesItems>
                    <li>Lagos</li><br />
                    <li>Lekki</li><br />
                    <li>Aja</li><br />
                    <li>Ikoyi</li><br />
                    <li>Ikeja</li>
                </StyledCitiesItems>
            </StyledCitiesA>
            <StyledCitiesB>
            <StyledCitiesItems>
                    <li>Surulere</li><br />
                    <li>Ikorodu</li><br />
                    <li>L/Mainland</li><br />
                    <li>Kano</li><br />
                    <li>Kaduna</li>
                </StyledCitiesItems>
            </StyledCitiesB>
            <StyledCitiesC>
            <StyledCitiesItems>
                    <li>Abuja</li><br />
                    <li>Ogun</li><br />
                    <li>Oshogbo</li><br />
                    <li>Ibadan</li><br />
                    <li>Portharcort</li>
                </StyledCitiesItems>
            </StyledCitiesC>
        </StyledCities>
    )
}

export default Cities;