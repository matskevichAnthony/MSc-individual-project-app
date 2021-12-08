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
    width: 35%;
    height: 100%;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
`;

export const SideInfo = styled.div`
    width: 35%;
    height: 100%;
    background-color: white;
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
export const InformationDiv = styled.div`
    padding-top: 1rem;
    width: 80%;
    height: 100%;
`;

export const InformationSideDiv = styled.div`
    padding-top: 1rem;
    width: 80%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    svg{
        margin-bottom: 1.6rem;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    background-color: white;
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