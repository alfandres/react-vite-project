import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { shopiContext } from '../../Context';

function Navbar () {
    const context = useContext(shopiContext);
    const activeStyle = 'underline underline-offset-8';

   return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
        <ul className='flex items-center gap-3'>
            <li className='font-bold text-lg'> 
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/men'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Men
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/woman'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Woman
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/electronics'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/jewelery'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Jewelery    
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/others'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Others
                </NavLink>
            </li>
        </ul>

        <ul className='flex items-center gap-3'>
            <li className='text-red-500 font-semibold'>
                example@email.com
            </li>
            <li>
                <NavLink 
                to='/MyOrders'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/MyAccount'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/SignIn'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Sign In
                </NavLink>
            </li>
            <li className='flex'>
                <ShoppingBagIcon className='h-6 w-6 text-black cursor-pointer'></ShoppingBagIcon>
                <div>{context.count}</div> 
                
            </li>
        </ul>
    </nav>
   ); 
}

export { Navbar } ;