import React, { useState, useRef } from 'react';
import { SignUpWrapper } from './styled';
import { Form, Button } from 'react-bootstrap'

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^[a-zA-Z0-9]{8,}$/;

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({});

    const loginRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { value: loginValue } = loginRef.current;
        const { value: emailValue } = emailRef.current;
        const { value: passwordValue } = passwordRef.current;
        const { value: repeatPasswordValue } = repeatPasswordRef.current;

        const userData = {
            name: loginValue,
            email: emailValue,
            password: passwordValue,
            password_confirmation: repeatPasswordValue,
        };

        setUserInfo({
            name: loginValue,
            email: emailValue,
            password: passwordValue,
            password_confirmation: repeatPasswordValue,
        });
        console.log(loginValue, emailValue, passwordValue, repeatPasswordValue);
        fetch('http://localhost/events_backend/public/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }).then(() => {
            console.log("CREATED NEW USER!");
        })
    }


    const fetchData = () => {
        fetch('http://localhost/events_backend/public/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        }).then(() => {
            console.log("CREATED NEW USER!");
        })
    }


    console.log(userInfo)


    return (
        <SignUpWrapper>
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

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </SignUpWrapper>

    )

}

export default SignUp;