import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const CreateAccount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #836FFF;
    padding: 90px;
`;

export const ButtonCreateAccountOurMakeLogin = styled.button`
    border: none;
    background: #836FFF;
    cursor: pointer;
`;

export const TextButtonCreateAccountOurMakeLogin = styled.p`
    margin-top: 30px;
    color: #FFDEAD;
`;

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
`;

export const WelcomePhase = styled.h1`
    color: white;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;

export const Explanation = styled.span`
    color: #F5F5F5;
    margin-top: 30px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`;
