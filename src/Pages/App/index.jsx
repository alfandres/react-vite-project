import  ShopiProvider from '../../Context';
import  AppRoutes from './AppRoutes';
import  BrowserRouter from 'react-router-dom';
import  Navbar from '../../Components/Navbar';
import  CheckoutShoping from '../../Components/CheckoutShoping';

import './App.css'

function App() {
  return (
    <ShopiProvider>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      <CheckoutShoping/>
    </BrowserRouter>
    </ShopiProvider>
  );
}

export default App;
