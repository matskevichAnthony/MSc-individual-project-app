import React, { useEffect, useState } from 'react';
import { Wrapper, Title, StyledInput, InputWrapper } from './styled';

const PreferencesCard = ({ title, reference, preferenceValue }) => {

    const [preferenceNumber, setPreferenceNumber] = useState(preferenceValue)

    const onChangeHandler = (e) => {
        setPreferenceNumber(e.target.value);
    };


    return (
        <Wrapper>
            <Title>{title}</Title>
            <InputWrapper>
                <StyledInput ref={reference} value={preferenceNumber} type="range" min="0" max="10" step="1" onChange={onChangeHandler} />
            </InputWrapper>
        </Wrapper>
    )
};

export default PreferencesCard;