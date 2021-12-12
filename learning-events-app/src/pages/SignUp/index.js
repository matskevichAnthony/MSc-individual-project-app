import React, { useState, useRef, useEffect } from 'react';
import { SignUpWrapper } from './styled';
import { Form, Button } from 'react-bootstrap'
import PreferencesCard from '../../components/CardComponents/PreferencesCard';
import { useSelector, useDispatch } from 'react-redux';
import { getEventTypes } from '../../action/events';
import { register } from '../../action/Auth';
import {
    UserWrapper,
    UserImage,
    UserImageWrapper,
    ContentWrapper,
    UpperSectionWrapper,
    LowerSectionWrapper,
    InputWrapper,
    StyledButton,
    StyledInput,
    InnerInputWrapper,
    PreferencesCardsWrapper,
} from './styled';

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^[a-zA-Z0-9]{8,}$/;

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({});
    const eventTypes = useSelector((state) => state.getEventTypes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEventTypes());
    }, [dispatch])

    const loginRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();
    const techRef = useRef();
    const scienceRef = useRef();
    const artRef = useRef();
    const businessRef = useRef();
    const careerRef = useRef();
    const languagesRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { value: loginValue } = loginRef.current;
        const { value: emailValue } = emailRef.current;
        const { value: passwordValue } = passwordRef.current;
        const { value: repeatPasswordValue } = repeatPasswordRef.current;
        const { value: technologyValue } = techRef.current;
        const { value: scienceValue } = scienceRef.current;
        const { value: artValue } = artRef.current;
        const { value: businessValue } = businessRef.current;
        const { value: careerValue } = careerRef.current;
        const { value: languagesValue } = languagesRef.current;

        console.log(techRef.current.value);
        //check and delete later
        const userData = {
            "event_type[1]": technologyValue,
            "event_type[2]": scienceValue,
            "event_type[3]": artValue,
            "event_type[4]": businessValue,
            "event_type[5]": careerValue,
            "event_type[6]": languagesValue,
            name: loginValue,
            email: emailValue,
            password: passwordValue,
            password_confirmation: repeatPasswordValue,
        };
        dispatch(register(userData));
        console.log(userData);

        setUserInfo({
            "event_type[1]": parseInt(technologyValue),
            "event_type[2]": parseInt(scienceValue),
            "event_type[3]": parseInt(artValue),
            "event_type[4]": parseInt(businessValue),
            "event_type[5]": parseInt(careerValue),
            "event_type[6]": parseInt(languagesValue),
            name: loginValue,
            email: emailValue,
            password: passwordValue,
            password_confirmation: repeatPasswordValue,
        });


    }


    // const fetchData = () => {
    //     fetch('http://localhost/events_backend/public/auth/register', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(userInfo)
    //     }).then(() => {
    //         console.log("CREATED NEW USER!");
    //     })
    // }


    console.log(userInfo)


    return (
        <SignUpWrapper>
            Register in EduEvents
            <ContentWrapper>
                <LowerSectionWrapper>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control ref={loginRef} type="text" placeholder="Enter username" />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Repeat password</Form.Label>
                            <Form.Control ref={repeatPasswordRef} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    Preferences
                    <PreferencesCardsWrapper>
                        <PreferencesCard reference={techRef} title="Technology" />
                        <PreferencesCard reference={scienceRef} title="Science" />
                        <PreferencesCard reference={artRef} title="Art" />
                        <PreferencesCard reference={businessRef} title="Business" />
                        <PreferencesCard reference={careerRef} title="Career" />
                        <PreferencesCard reference={languagesRef} title="Languages" />
                        {/* {eventTypes.map((type) => {
                            return <PreferencesCard title={type.name} />
                        })} */}
                    </PreferencesCardsWrapper>
                    <StyledButton>submit</StyledButton>
                </LowerSectionWrapper>
            </ContentWrapper>
        </SignUpWrapper>

    )

}

export default SignUp;