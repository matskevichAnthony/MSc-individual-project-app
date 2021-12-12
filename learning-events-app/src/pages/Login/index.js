import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LoginDetailsWrapper, LoginWrapper } from './styled';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../action/Auth';
import { Form, Button } from 'react-bootstrap';

const Login = () => {

    const [userInfo, setUserInfo] = useState({});
    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { value: emailValue } = emailRef.current;
        const { value: passwordValue } = passwordRef.current;

        const userData = {
            email: emailValue,
            password: passwordValue,
        };

        fetch('http://localhost/events_backend/public/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }).then(response => {
            return response.json();
        }).then((data) => {
            const info = data;
            console.log(info.data.jwt);
            setUserInfo({
                email: emailValue,
                password: passwordValue,
                jwt: info.data.jwt,
            });
            dispatch(authenticate(emailValue, passwordValue, info.data.jwt));
            window.location.reload();
        })
    }

    return (
        <LoginWrapper>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-white">
                        Not registered?   <Link to="/register">Click here.</Link>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </LoginWrapper>

    )

}

export default Login;