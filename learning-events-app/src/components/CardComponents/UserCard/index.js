import React from 'react';
import { Wrapper, IconWrapper, TextWrapper } from './styled';
import { FaUser } from "react-icons/fa";

const UserCard = ({ information }) => {
    console.log(information);
    return (
        <Wrapper>
            <IconWrapper><FaUser /></IconWrapper>
            <TextWrapper>{information.name}</TextWrapper>
        </Wrapper>
    )

};

export default UserCard;