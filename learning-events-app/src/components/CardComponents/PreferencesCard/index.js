import React from 'react';
import { Wrapper, Title, StyledInput, InputWrapper } from './styled';

const PreferencesCard = ({ title, reference }) => {

    const onChangeHandler = () => {
    };

    return (
        <Wrapper>
            <Title>{title}</Title>
            <InputWrapper>
                <StyledInput ref={reference} type="range" min="0" max="10" step="1" onChange={onChangeHandler} />
            </InputWrapper>
        </Wrapper>
    )
};

export default PreferencesCard;