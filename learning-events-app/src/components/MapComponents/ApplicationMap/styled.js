import styled from "styled-components";


export const CreateEventButton = styled.button`
    width: 8rem;
    height: 2rem;
    background-color: tomato;
    color: white;
    border:none;
    position: relative;
    top: 90%;
    left: 46%;
`;

export const FilterWrapper = styled.div`
    width: 100%;
    height: 4rem;
    top: 2%;
    position: relative;
    display: flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
`;

export const FilterButton = styled.button`
    width: 10rem;
    height: 2.5rem;
    border-radius:20px;
    border: none;
    background: white;
    color: tomato;
    font-weight:600;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    transition:all 0.23s linear;
    &:hover{
        background: tomato;
        color:white;
    }
`;