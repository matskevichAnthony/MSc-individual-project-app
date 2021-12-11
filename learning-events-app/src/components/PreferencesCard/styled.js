import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 9.5rem;
    height: 8.5rem;
    background: linear-gradient(127deg, rgba(255,59,0,1) 0%, rgba(255,145,0,1) 100%);
    border-radius: 25px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`;

export const Title = styled.div`
    width: 6.5rem;
    height: 1.5rem;
    border-radius: 25px;
    background: white;
    color:gray;
    display: flex;
    justify-content:center;
    align-items:center;
    font-size:0.9rem;
    padding: 1rem;
`;

export const InputWrapper = styled.div`
    width: 8rem;
    height: 1.5rem;
    background: white;
    border-radius:20px;
    display: flex;
    align-items:center;
`;

export const StyledInput = styled.input`

&::-webkit-slider-runnable-track{
    background: white;
    border-radius:25px;
}
`;