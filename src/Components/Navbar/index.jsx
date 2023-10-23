import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { shopiContext } from '../../Context';

function Navbar () {
    const context = useContext(shopiContext);
    const activeStyle = 'underline underline-offset-8 text-white';

    const handleSearch = () =>{
        context.setSearchByTitle('') 
    }

    

   return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-[#299fff]'>
        <ul className='flex items-center gap-3'>
            <li className='font-bold text-lg'> 
                <NavLink to='/'>
                   <span className=' text-white'>Shop</span><span className='text-red-500'>i</span>
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/'
                    onClick={() => context.setSearchByCategory() + handleSearch()}
                    className= {( {isActive} ) => isActive ? activeStyle : undefined}
                >
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/clothing'
                    onClick={() => context.setSearchByCategory('clothing') + handleSearch()}
                    className= {( {isActive} ) => isActive ? activeStyle : undefined}
                >
                    Clothing
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics') + handleSearch()}
                    className= {( {isActive} ) => isActive ? activeStyle : undefined}
                >
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/jewelery'
                    onClick={() => context.setSearchByCategory('jewelery') + handleSearch()}
                    className= {( {isActive} ) => isActive ? activeStyle : undefined}
                >
                    Jewelery    
                </NavLink>
            </li>
            {/* <li>
                <NavLink 
                to='/others'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Others
                </NavLink>
            </li> */}
        </ul>

        <ul className='flex items-center gap-3'>
            <li>
                <NavLink
                to='/MyAccount'
                className='text-red-500 font-semibold'
                >
                   johndoe@example.com
                </NavLink>
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
            {/* <li>
                <NavLink 
                to='/SignIn'
                className= {( {isActive} ) =>
                    isActive ? activeStyle : undefined
                }>
                    Sign In
                </NavLink>
            </li> */}
            <li>
                <NavLink 
                onClick={() => context.openCheckoutShoping()}
                className='flex'>
                    <ShoppingBagIcon className='h-6 w-6 text-white cursor-pointer'></ShoppingBagIcon>
                    <div>{context.addCards.length}</div> 
                </NavLink>
            </li>
        </ul>
    </nav>
   ); 
}

export { Navbar } ;