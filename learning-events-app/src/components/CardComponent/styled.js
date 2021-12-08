import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
`;

export const InnerWrapperIcon = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const InnerWrapperTitle = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: flex-end;
    small{
        font-size: 1rem;
        font-weight: bold;
    }
`;

export const Date = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    small{
        font-size: 0.8rem;
    }
`;

export const Location = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Owner = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;


export const InnerWrapperInfo = styled.div`
    width: 30%;
    height: 100%;
`;

export const InnerWrapperButton = styled.div`
    width: 10%;
    height: 100%;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
`

export const StyledButton = styled.button`
    width: 100%;
    height: 3rem;
    border:none;
    background-color: tomato;
    color: white;
`;

export const IconWrapper = styled.div`
    background-color: ${p => p.small ? 'none' : 'tomato'};;
    color: ${p => p.small ? 'tomato' : 'white'};
    font-size: ${p => p.small ? '1.4rem' : '2.5rem'};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${p => p.small ? '1.8rem' : '3.5rem'};
    height: ${p => p.small ? '1.8rem' : '3.5rem'};
    border-radius: 20px;
`;

export const ImgWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 5rem;
    background-color: red;

    img{
        position: relative;
        width: 100%;
        height: 7em;
        object-fit: cover;
        overflow: hidden;
    }
`;