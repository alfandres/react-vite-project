import { useRoutes } from 'react-router-dom';

import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../Signin';

function AppRoutes () {

    let router = useRoutes ([
      { path: '/', element: <Home/> },
      { path: '/MyAccount', element: <MyAccount/> },
      { path: '/MyOrder', element: <MyOrder/> },
      { path: '/MyOrders', element: <MyOrders/> },
      { path: '/SignIn', element: <SignIn/> },
      { path: '/*', element: <NotFound/> }
    ])

    return (router);
  }

  export { AppRoutes };