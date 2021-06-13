import React from 'react';
import '../styles/global.css';
import { useHistory } from 'react-router-dom';
import { Container, UploadContainer, InputFile } from '../styles/logged';

export default function Logged() {
    const history = useHistory();

    function CleanToken() {
        localStorage.removeItem('token');
        history.push('/');
    }

    return(
        <Container>
            <UploadContainer>
                <InputFile type="file" />

                <button onClick={CleanToken}>Logout</button>
            </UploadContainer>
        </Container>
    )
}