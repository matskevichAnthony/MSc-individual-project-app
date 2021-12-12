import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 15rem;
    height: 9rem;
    border-radius: 28px;
    overflow: hidden;
    border:1px solid #e0e0e0;
`;

export const ExtraWrapper = styled.div`
    width: 15rem;
    height: 9rem;
    border-radius: 28px;
    position: relative;
`;

export const StarWrapper = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    position: absolute;
    right: 0%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: tomato;
`;

export const TitleWrapper = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    small{
        margin-left: 0.8rem;
        font-size: 0.7rem;
        font-weight: bold;
    }
`;

export const IconDataWrapper = styled.div`
    width: 100%;
    height: 1.3rem;
    margin-left: 0.3rem;
    small{
    font-size: 0.8rem;
    font-weight:100;
    margin-left: 0.3rem;
    }
`

export const InfoWrapper = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin-left: 0.5rem;
`;

export const ButtonWrapper = styled.div`
    height: 15%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const StyledButton = styled.button`
    width: 5rem;
    height: 1rem;
    border-radius: 20px;
    text-align: center;
    border:none;
    font-size: 0.7rem;
    color: white;
    background-color: tomato;
`;

export const StyledLink = styled(Link)`
`;