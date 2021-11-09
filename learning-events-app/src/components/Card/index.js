import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, ImgWrapper, StyledButton } from "./styled";


const Card = ({ information }) => {

    return (
        <Wrapper>
            <ImgWrapper><img src={information.picture} /></ImgWrapper>
            <h3>{information.event}</h3>
            <StyledButton>click me</StyledButton>
        </Wrapper>
    )

}

export default Card