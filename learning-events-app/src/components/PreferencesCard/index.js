import React from 'react';
import { Wrapper, Title, StyledInput, InputWrapper } from './styled';

const PreferencesCard = ({ title }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <InputWrapper>
                <StyledInput type="range" />
            </InputWrapper>
        </Wrapper>
    )
}

export default PreferencesCard;