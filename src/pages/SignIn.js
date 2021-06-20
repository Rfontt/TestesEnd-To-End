import React, { useState } from 'react';
import { Legend, Input, Button, TextButton } from '../styles/SignInAndSignUp';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

export default function SignIn() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const history = useHistory();

    async function login(formEvent) {
        formEvent.preventDefault();
        const datas = { email, password };
    
        if(email !== '' && password !== '') {
          try{
            let response = await api.post("/login", datas);
            
            localStorage.setItem('token', response.data.token);
            history.push('/main');
          }catch(error) {
            await setError('Incorrect datas');

            setTimeout(() => {
              setError('');
            }, 3000)
          }
        }else {
          setError('Fill in all fields');
          
          setTimeout(() => {
            setError('');
          }, 3000)
        }
    }

    return(
        <form onSubmit={login} >
            {error ? <Legend>{error}</Legend> : <Legend>Sign in</Legend>}

            <Input placeholder="Email:" id="email" value={email} onChange = {event => setEmail(event.target.value)} defaultValue="" />
            <Input placeholder="Password:" type="password" id="password" value={password} onChange = {event => setPassword(event.target.value) } defaultValue="" />
            <Button id="btn-login">
                <TextButton>
                    Login
                </TextButton>
            </Button>
        </form>
    )
}