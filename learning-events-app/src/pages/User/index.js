import React from 'react';
import { UserWrapper, UserImage, UserImageWrapper } from './styled';
import { Form, Col, Row, Button } from 'react-bootstrap';
import userData from '../../data/userData';



const User = () => {

    const data = userData();

    return (
        <UserWrapper>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="username" value={data.userName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="email" value={data.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="text" placeholder="Date of Birth" value={data.dateOfBirth} />
                </Form.Group>
                <br />
                <h1>PREFERENCES</h1>
                <br />
                {data.preferences.map((elem) => {
                    return (
                        < Form.Group className="mb-3" controlId="formBasicPassword" >
                            <Form.Label>{elem.type}</Form.Label>
                            <Form.Control type="range" min="0" max="10" step="1" value={elem.preferenceLevel} />
                        </Form.Group>
                    )
                })}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </UserWrapper >
    )

}

export default User;