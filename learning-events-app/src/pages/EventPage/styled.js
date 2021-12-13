import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InnerBox = styled.div`
    width: 50%;
    height: 70vh;
    background-color: white;
    overflow: hidden;
`;

export const HeaderBox = styled.div`
    width: 100%;
    height: 15rem;
    background-color: gray;
    display: flex;
`;

export const HeaderImg = styled.img`
    width: 65%;
    height: 100%;
    object-fit: cover;
`;

export const HeaderInfo = styled.div`
    width: 100%;
    height: 100%;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size:2rem;
    color:white;
`;

export const SideInfo = styled.div`
    width: 35%;
    height: 100%;
    background-color: red;
    display: flex;
    justify-content: center;
`;

export const MainInfo = styled.div`
    width: 65%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
`;

export const CarouselWrapepr = styled.div`
    width: 20rem;
    height: 10rem;
    background: pink;
`;

export const InformationDiv = styled.div`
    padding-top: 1rem;
    width: 80%;
    height: 100%;
`;
export const AboutWrapper = styled.div`
    width: 100%;
    height: 15%;
    background: pink;
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    height: 40%;
`;

export const InformationSideDiv = styled.div`
    padding-top: 1rem;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:0.6rem;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content:space-between;
`;

export const TextInnerWrapper = styled.div`
    width: 80%;
    height: 100%;
`;

export const IconInnerWrapper = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    svg{
        color:tomato;
        width:1.2rem;
        height: 1.2rem;
    }
`;

export const MapWrapper = styled.div`
    width: 100%;
    height: 10vh;
    background-color: white;
`;

export const JoinButton = styled.button`
    width: 3rem;
    height: 2rem;
    background-color: tomato;
    border: none;
    color: white;
    font-weight: bold;
`;

export const GoBackButton = styled.button`
    position: absolute;
    width: 3rem;
    height: 3rem;
    background-color: tomato;
    border: none;
    color: white;
    font-weight: bold;
`;