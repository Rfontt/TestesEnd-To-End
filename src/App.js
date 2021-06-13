import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

export default function App() {
  return(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}