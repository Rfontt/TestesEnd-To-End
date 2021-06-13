import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background: #F5F5F5;
`;

export const UploadContainer = styled.div`
    width: 50%;
    height: 40rem;
    background: white;
    box-shadow: 0px 0px 0px 0.09px #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const InputFile = styled.input`
    margin-bottom: 80px;
`;