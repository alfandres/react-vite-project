import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { shopiContext } from '../../Context';

import'./CheckoutShoping.css';


function CheckoutShoping () {

    const context = useContext(shopiContext);
    console.log('info del producto: ', context.productInformacion);

    return(

        <aside className={`${context.checkoutShopingOpen ? 'flex' : 'hidden'} checkout-shoping flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => context.closeCheckoutShoping()}></XMarkIcon>
                </div>
                <h2 className='font-medium text-xl'>My Order</h2>
            </div>

        </aside>

    );
}

export default CheckoutShoping;