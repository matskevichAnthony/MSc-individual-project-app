import React from 'react';
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
import { Form, Col, Row, Button } from 'react-bootstrap';
import PreferencesCard from '../../components/PreferencesCard';
import userData from '../../data/userData';



const User = () => {

    const data = userData();

    return (
        <UserWrapper>
            <ContentWrapper>
                Welcome to your user page, Anton
                <UpperSectionWrapper>
                    Details
                    <InputWrapper><InnerInputWrapper>email: <StyledInput /></InnerInputWrapper></InputWrapper>
                    <InputWrapper><InnerInputWrapper>username: <StyledInput /></InnerInputWrapper></InputWrapper>
                    <InputWrapper><InnerInputWrapper>password: <StyledInput /></InnerInputWrapper></InputWrapper>
                    <InputWrapper><InnerInputWrapper>repeat password: <StyledInput /></InnerInputWrapper></InputWrapper>
                    <StyledButton>submit</StyledButton>
                </UpperSectionWrapper>
                <LowerSectionWrapper>
                    Preferences
                    <PreferencesCardsWrapper>
                        <PreferencesCard></PreferencesCard>
                        <PreferencesCard></PreferencesCard>
                        <PreferencesCard></PreferencesCard>
                        <PreferencesCard></PreferencesCard>
                        <PreferencesCard></PreferencesCard>
                        <PreferencesCard></PreferencesCard>
                    </PreferencesCardsWrapper>
                    <StyledButton>submit</StyledButton>
                </LowerSectionWrapper>
            </ContentWrapper>
        </UserWrapper >
    );

}

export default User;


// <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>username</Form.Label>
//                     <Form.Control type="text" placeholder="username" value={data.userName} />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="email" value={data.email} />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Date of Birth</Form.Label>
//                     <Form.Control type="text" placeholder="Date of Birth" value={data.dateOfBirth} />
//                 </Form.Group>
//                 <br />
//                 <h1>PREFERENCES</h1>
//                 <br />
//                 {data.preferences.map((elem) => {
//                     return (
//                         < Form.Group className="mb-3" controlId="formBasicPassword" >
//                             <Form.Label>{elem.type}</Form.Label>
//                             <Form.Control type="range" min="0" max="10" step="1" value={elem.preferenceLevel} />
//                         </Form.Group>
//                     )
//                 })}

//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>