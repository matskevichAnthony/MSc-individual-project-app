import React, { useEffect, useState, useRef } from 'react';
import PreferencesCard from '../../components/CardComponents/PreferencesCard';
import { getPreferences } from '../../action/preferences';
import { useSelector, useDispatch } from 'react-redux';
import { updatePreferences } from '../../action/preferences';
import { updateUser } from '../../action/Auth';
import { checkLogin } from '../../action/Auth';
import {
    UserWrapper,
    ContentWrapper,
    UpperSectionWrapper,
    LowerSectionWrapper,
    InputWrapper,
    StyledButton,
    StyledInput,
    InnerInputWrapper,
    PreferencesCardsWrapper,
} from './styled';

const User = () => {

    const dispatch = useDispatch();
    const preferences = useSelector((state) => state.getEvents.preferences);
    const userData = useSelector((state) => state.authReducer);
    const [preferencesArray, setPreferencesArray] = useState([]);

    //user details
    const loginRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();
    //preference details
    const techRef = useRef();
    const scienceRef = useRef();
    const artRef = useRef();
    const businessRef = useRef();
    const careerRef = useRef();
    const languagesRef = useRef();

    const ChangeUserDetailsHandler = () => {
        const { value: loginValue } = loginRef.current;
        const { value: emailValue } = emailRef.current;
        // const { value: passwordValue } = passwordRef.current;
        // const { value: repeatPasswordValue } = repeatPasswordRef.current;
        const passwordValue = passwordRef.current.value;
        const repeatPasswordValue = repeatPasswordRef.current.value;

        const userData = {
            name: loginValue,
            email: emailValue,
            password: passwordValue,
            password_confirmation: repeatPasswordValue,
        };

        dispatch(updateUser(userData));

    };

    const ChangePreferencesHandler = () => {

        const { value: technologyValue } = techRef.current;
        const { value: scienceValue } = scienceRef.current;
        const { value: artValue } = artRef.current;
        const { value: businessValue } = businessRef.current;
        const { value: careerValue } = careerRef.current;
        const { value: languagesValue } = languagesRef.current;

        const userData = {
            "event_type[1]": technologyValue,
            "event_type[2]": scienceValue,
            "event_type[3]": artValue,
            "event_type[4]": businessValue,
            "event_type[5]": careerValue,
            "event_type[6]": languagesValue,
        };

        dispatch(updatePreferences(userData));
    };

    console.log(preferences);

    useEffect(() => {
        dispatch(getPreferences());
        dispatch(checkLogin())
    }, [dispatch]);

    useEffect(() => {
        setPreferencesArray(preferences);
    }, [preferences, preferencesArray]);



    return (
        <UserWrapper>
            <ContentWrapper>
                Welcome to your user page, {userData.login}
                <UpperSectionWrapper>
                    Details
                    <InputWrapper><InnerInputWrapper>email: <StyledInput ref={emailRef} value={userData.login} /></InnerInputWrapper></InputWrapper>
                    <InputWrapper><InnerInputWrapper>username: <StyledInput ref={loginRef} /></InnerInputWrapper></InputWrapper>
                    <InputWrapper><InnerInputWrapper>password: <StyledInput ref={passwordRef} /></InnerInputWrapper></InputWrapper>
                    <InputWrapper><InnerInputWrapper>repeat password: <StyledInput ref={repeatPasswordRef} /></InnerInputWrapper></InputWrapper>
                    <StyledButton onClick={ChangeUserDetailsHandler}>submit</StyledButton>
                </UpperSectionWrapper>
                <LowerSectionWrapper>
                    Preferences
                    <PreferencesCardsWrapper>
                        <PreferencesCard reference={techRef} title="Technology" />
                        <PreferencesCard reference={scienceRef} title="Science" />
                        <PreferencesCard reference={artRef} title="Art" />
                        <PreferencesCard reference={businessRef} title="Business" />
                        <PreferencesCard reference={careerRef} title="Career" />
                        <PreferencesCard reference={languagesRef} title="Languages" />
                    </PreferencesCardsWrapper>
                    <StyledButton onClick={ChangePreferencesHandler}>submit</StyledButton>
                </LowerSectionWrapper>
            </ContentWrapper>
        </UserWrapper >
    );
}
export default User;