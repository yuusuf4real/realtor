import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    height: 3.3em;
    background-color: #0000FF;
    position: fixed;
    top: 0;
`;

export const StyledSignUp = styled.button` 
    display: inline-block;
    line-height: 1.5;
    color: #212529;
	:hover {
		background-color: #ffe484;
        color: black;
        transition: opacity 0.3s all ease-in-out;
	}
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    float: right;
    font-weight: 600;
    color: #ffe484;
    border-color: #ffe484;
    margin-top: .5rem!important;
    margin-bottom: .5rem!important;
    margin-right: 10rem!important;
`;

export const StyledSignIn = styled.button` 
    display: inline-block;
    line-height: 1.5;
    color: #212529;
	:hover {
		background-color: #ffe484;
        color: black;
        transition: opacity 0.3s all ease-in-out;
	}
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    float: right;
    font-weight: 600;
    color: #ffe484;
    border-color: #ffe484;
    margin-top: .5rem!important;
    margin-bottom: .5rem!important;
    margin-right: 1rem!important;
`;

export const StyledMenu = styled.p`
    width: 43%;
    height: 3rem;
    font-size: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    float: left;
    color: white;
    margin-top: -0rem;
    margin-left: 7em;
    cursor: pointer;
    visited {
    color: green;
}
`;

export const StyledLogo = styled.img`
    width: 10rem;
    height: 8rem;
    margin-top: 0.8rem;
    margin-left: -5em;
    cursor: pointer;
    margin-top: -2.5rem;
`;
