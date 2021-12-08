import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ContentWrapper = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:3rem;
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color:tomato;
    background-color: white;
`;

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 40%;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ExtraCarouselWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
`;

export const ScrollWrapper = styled.div`
    width: 100%;
    height: 90%;
    background-color: white;
`

export const FilterWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
`