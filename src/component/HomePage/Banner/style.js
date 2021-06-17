import styled from "styled-components";

export const StyledBanner = styled.div`
    width: 100%;
    height: 32.8em;
    background-color: #DCDCDC;
`;

export const StyledInBanner1 = styled.div`
    width: 35em;
    height: 29em;
    float: left;
    margin-left: 7em;
`;

export const StyledInBanner2 = styled.div`
    width: 35em;
    height: 29em;
    float: left;
    margin-left: 2em;
    margin-top: 2.8em;
`;

export const StyledBannerImg = styled.img`
    width: 35em;
    height: 29em;
`

export const StyledText1 = styled.h1`
    font-size: 3.5em;
    line-height: 1.1em;
    font-weight: 500;
    margin-top: 0.5em;
`;

export const StyledText2 = styled.p`
    margin-top: -1rem;
    font-size: calc(1.275rem + .3vw);
    text-align: justify;
    text-justify: auto;
    line-height: normal;
    font-weight: 400;
    color: #495057;
`;

export const StyledBannerBtn = styled.button` 
    width: 9rem;
    height: 3rem;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
	:hover {
		background-color: #4B0082;
        color: #fff;
        transition: opacity 0.3s all ease-in-out;
	}
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: #0000FF;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1.25rem;
    border-radius: .25rem;
    font-weight: 600;
    color: #fff;
    border-color: #0000FF;
    margin-top: 1rem!important;
`;

export const StyledBannerBtn2 = styled.button` 
    width: 9rem;
    height: 3rem;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
	:hover {
		background-color: #6c757d;
        color: #fff;
        transition: opacity 0.3s all ease-in-out;
	}
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: #fff;
    padding: .375rem .75rem;
    font-size: 1.25rem;
    border-radius: .3rem;
    font-weight: 600;
    color: #6c757d;
    border-color: #6c757d;;
    margin-top: 1rem!important;
    margin-left: 1rem;
`;

export const StyledInput = styled.input`
    width: 40em;
    height: 3em;
    padding: 0.5em;
    color: ${props => props.inputColor || "black"};
    background: #fff0d0;
    border: none;
    border-radius: 4px;
    font-size: 15px;
`;
