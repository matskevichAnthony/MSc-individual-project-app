import styled from "styled-components";

export const UserWrapper = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: whitesmoke;
`;

export const ContentWrapper = styled.div`
    width: 50%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: tomato;
`;

export const UpperSectionWrapper = styled.div`
    width: 100%;
    height: 40%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    color: tomato;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const LowerSectionWrapper = styled.div`
    width: 100%;
    height: 60%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    gap: 1rem;
    padding: 1rem;
    color: tomato;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    `;

export const StyledButton = styled.button`
    width: 7rem;
    height: 1.5rem;
    color: white;
    background-color: tomato;
    text-align: center;
    border-radius:15px;
    border: none;
    transition:all 0.5s linear;
    &:hover{
        background: red;
    }
`;

export const InputWrapper = styled.div`
    width: 36rem;
    height: 2.5rem;
    display: flex;
    justify-content: flex-star;
    gap:1rem;
`;

export const StyledInput = styled.input`
    border:1px solid #E5E5E5;
    display: inline-block;
    height: 1.8rem;
`;

export const InnerInputWrapper = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content:flex-end;
    gap:0.5rem;
    color: tomato;
    font-weight:600;
`;

export const PreferencesCardsWrapper = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap: 1rem;
`;


export const UserImageWrapper = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const UserImage = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: honeydew;
    border-radius:50%;
`;