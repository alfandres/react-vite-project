import React, { useContext } from 'react';
import { useRoutes } from 'react-router-dom';

import { Navbar } from '../../Components/Navbar';
import { shopiContext } from '../../Context';

import CheckoutShoping from '../../Components/CheckoutShoping';
import LoadingScreen from '../../Components/LoadingScreen';

import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../Signin';

function AppUI () {
  const context = useContext(shopiContext);

  const Router = () => {
    let router = useRoutes ([
      { path: '/', element: <Home/> },
      { path: '/clothing', element: <Home/> },
      { path: '/electronics', element: <Home/> },
      { path: '/jewelery', element: <Home/> },
      { path: '/MyAccount', element: <MyAccount/> },
      { path: '/MyOrder', element: <MyOrder/> },
      { path: '/MyOrders', element: <MyOrders/> },
      { path: '/MyOrders/last', element: <MyOrder/> },
      { path: '/MyOrders/:id', element: <MyOrder/> },
      { path: '/SignIn', element: <SignIn/> },
      { path: '/*', element: <NotFound/> }
    ]);
    return router ;
  }
    return (
    <>
      {context.loading?(
        <LoadingScreen />
      ) : (
        <>
          <Router />
          <Navbar />
          <CheckoutShoping />
        </>
      )}
      </>
    );

  }

  export { AppUI };