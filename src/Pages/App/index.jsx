import { ShopiProvider } from '../../Context';
import { AppRoutes } from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar';

import './App.css'

function App() {
  return (
    <ShopiProvider>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
    </ShopiProvider>
  );
}

export default App;
