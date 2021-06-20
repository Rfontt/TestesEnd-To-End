import React, { useState, useRef } from 'react';
import { Legend, Input, Button, TextButton } from '../styles/SignInAndSignUp';
import api from '../services/api';

export default function SignUp() {
    const [ name, setName ] = useState(''); 
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const timeOutRef = useRef();
    const [ created, setCreated ] = useState('');
  
    async function createAccount(formEvent) {
        formEvent.preventDefault();
        const datas = { name, email, password };
    
        if(name !== '' && email !== '' && password !== '') {
          try{
            await api.post("usercommom", datas);

            setCreated("User created")
          }catch(error) {
            setError("User already exists");

            clearTimeout(timeOutRef.current);
            timeOutRef.current = setTimeout(() => {
              setError('');
            }, 3000);
          }
        }else {
            setError("Fill in all fields");

            clearTimeout(timeOutRef.current);
            timeOutRef.current = setTimeout(() => {
              setError('');
            }, 3000);
        }
    } 
    
    return(
        <form onSubmit={createAccount}>
            {created ? <Legend>{created}</Legend> : error ? <Legend>{error}</Legend> : <Legend>Sign up</Legend>}
            
            <Input placeholder="Name:" id="name" value={name} onChange = {event => setName(event.target.value)} defaultValue="" />
            <Input placeholder="Email:" id="email" value={email} onChange = {event => setEmail(event.target.value)} defaultValue="" />
            <Input placeholder="Password:" type="password" id="password" value={password} onChange = {event => setPassword(event.target.value)} defaultValue="" />
              
            <Button id="btn-createAccount">
                <TextButton>
                    Create Account
                </TextButton>
            </Button>
        </form>
    )
}