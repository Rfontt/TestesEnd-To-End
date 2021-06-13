import React, { useState } from 'react';
import '../styles/global.css';
import { Container, CreateAccount, Login, WelcomePhase, Explanation, ButtonCreateAccountOurMakeLogin, TextButtonCreateAccountOurMakeLogin } from '../styles/home';
import SignIn from './SignIn';
import SignUp from './SignUP';

export default function Home() {
  const [createAccountOurMakeLogin, setCreateAccountOurMakeLogin] = useState(true);  

  function stateCreateAccountOurMakeLogin() {
    setCreateAccountOurMakeLogin(!createAccountOurMakeLogin);
  }

  return (
    <Container>
      <CreateAccount>
        <WelcomePhase>Welcome to my website, friend.</WelcomePhase>
        <Explanation>
            This website was developed for testing purposes with cypress. <br />
            Take advantage of it a lot to gain knowledge about the world of testing.
        </Explanation>

        <ButtonCreateAccountOurMakeLogin onClick={stateCreateAccountOurMakeLogin} id="createAccountOurMakeLogin">
            {
              createAccountOurMakeLogin ? 
              <TextButtonCreateAccountOurMakeLogin>Don't have an account? click here</TextButtonCreateAccountOurMakeLogin>
              :
              <TextButtonCreateAccountOurMakeLogin> Already have an account? Make login</TextButtonCreateAccountOurMakeLogin>
            }
        </ButtonCreateAccountOurMakeLogin>   
      </CreateAccount>

      <Login>
          {
            createAccountOurMakeLogin ? <SignIn /> : <SignUp /> 
          }
      </Login>
    </Container>
  )
}