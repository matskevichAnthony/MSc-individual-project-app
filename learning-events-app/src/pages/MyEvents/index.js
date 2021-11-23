import React from 'react';
import UserEvents from '../../components/UserEvents.js';
import { useSelector } from 'react-redux';
import { Wrapper } from './styled.js';

const MyEvents = () => {
    const userState = useSelector((state) => state.userReducer);
    return (
        <Wrapper>
            <h1>Events you attend:</h1>
            <UserEvents information={userState.eventsAttend} />
            <h1>Events you manage:</h1>
            <UserEvents information={userState.eventsManage} />
        </Wrapper>
    )

}

export default MyEvents