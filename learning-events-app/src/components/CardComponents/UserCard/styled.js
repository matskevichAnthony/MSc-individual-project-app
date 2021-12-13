import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 4rem;
    height: 4rem;
    background: tomato;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    border-radius: 100%;
    overflow: hidden;
`;

export const IconWrapper = styled.div`
    width: 100%;
    height:45%;
    display: flex;
    align-items:center;
    justify-content:center;
    background: gray;
    svg{
        color: white;
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    height:55%;
    display: flex;
    align-items:center;
    justify-content:center;
    background: lightblue;
    `;