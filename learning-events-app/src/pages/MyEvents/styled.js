import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: whitesmoke;
    text-align:center;
    display: flex;
    justify-content:center;
    align-items:center;
    h1{
        color: tomato;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    width: 70%;
    height: 80%;
    gap:1rem;
`;

export const WindowWrapper = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 20px;
    background: white;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);

`;

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 50%;
`;