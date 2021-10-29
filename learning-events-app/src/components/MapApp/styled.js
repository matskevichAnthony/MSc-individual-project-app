import styled from 'styled-components';

export const Point = styled.div`
    width: 25rem;
    height: 20vh;
    position:absolute;
    z-index:100;
    top: 50%;
    left: 50%;
    background-color:black;
    transform:translate(-50%, -50%);
    border-radius: 15%;
    color:white;
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding: 0.8rem;
    font-family: sans-serif;
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 3rem;
    /* border: 1px solid white; */
    /* padding-bottom: 3rem; */
    position: absolute;
    bottom: 85%;
    align-self: center;
    text-align: center;

`;

export const CloseButton = styled.div`
    width:1rem;
    height:1rem;
    cursor: pointer;
    position:absolute;
    top:2rem;
    right:2rem; 
    color:black;
    background-color:white;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all linear 0.3s;
    &:hover{
    background-color: black;
    color:white;
    border: 1px solid white;
}
    
`;

export const MapHolder = styled.div` 
filter:grayscale(100%);

`;

export const GoButton = styled.button`
    width: 4rem;
    height: 4rem;
    align-self: center;
    border-radius: 50%;
    border: none;
    position: absolute;
    cursor: pointer;
    top: 80%;
    transition: all linear 0.3s;
    
    &:hover{
        background-color: black;
        color:white;
        border: 1px solid white;
    }
`;

// export const CoverGray = styled.div < { opacity: number } > ` 
//     width: 100%;
//     /* height: 100vh; */
//     top:0;
//     bottom:0;
//     background-color: rgba(0,0,0,.3);
//     position: fixed;
//     z-index: 107;
//     transition: opacity 0.3s ease;
//     opacity: ${p => p.opacity};
// `;
