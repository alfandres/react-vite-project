import React, { useContext } from 'react';
import { ShopiProvider } from '../../Context';
import { BrowserRouter } from 'react-router-dom';
import { AppUI } from './AppUI';
import './App.css';


function App() {

  return (
    <ShopiProvider>
      <BrowserRouter>
        <AppUI/>
      </BrowserRouter>
    </ShopiProvider>
  );
}

export default App;
