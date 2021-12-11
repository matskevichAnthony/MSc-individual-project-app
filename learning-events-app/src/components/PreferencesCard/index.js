import React from 'react';
import { Wrapper, Title, StyledInput, InputWrapper } from './styled';

const PreferencesCard = () => {
    return (
        <Wrapper>
            <Title>Technology</Title>
            <InputWrapper>
                <StyledInput type="range" />
            </InputWrapper>
        </Wrapper>
    )
}

export default PreferencesCard;