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
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color:tomato;
    border-radius: 15px;
`;

export const UpperSectionWrapper = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
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
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
`

export const FilterWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
`