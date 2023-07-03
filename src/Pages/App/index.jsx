import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ShopiProvider } from '../../Context';
import { Routes } from './Routes';
import { Navbar } from '../../Components/Navbar';

import CheckoutShoping from '../../Components/CheckoutShoping';

import './App.css';

function App() {
  return (
    <ShopiProvider>
        <BrowserRouter>
          <Routes/>
          <Navbar/>
          <CheckoutShoping/>
      </BrowserRouter>
    </ShopiProvider>
  );
}

export default App;
