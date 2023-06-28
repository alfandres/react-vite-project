import { useContext } from 'react';
import { shopiContext } from '../../Context';
import { NavLink } from 'react-router-dom';

function Navbar () {
    const context = useContext(shopiContext);
    const activeStyle = 'underline underline-offset-8';

   return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-10 text-md font-medium'>
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
                to='/kid'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Kid
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/baby'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Baby
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
            <li className='text-red-500'>
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
            <li>
                <NavLink to='/baby'>
                    🛒 {context.count}
                </NavLink>
            </li>
        </ul>
    </nav>
   ); 
}

export { Navbar } ;