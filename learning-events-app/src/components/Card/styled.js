import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`


width: 15rem;
height: 15rem;
border-radius: 20%;
flex-basis:auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
overflow: hidden;
margin: 2rem;
border: 1px solid tomato;


`;



export const ImgWrapper = styled.div`

width: 100%;
overflow: hidden;
margin-bottom: 5rem;
background-color: red;


img{
    position: relative;
    width: 100%;
    height: 7em;
    object-fit: cover;
    overflow: hidden;
}



`;

export const StyledLink = styled(Link)`

width: 100%;

`

export const StyledButton = styled.button`

width: 100%;
height: 3rem;
border:none;
background-color: tomato;
color: white;
`;