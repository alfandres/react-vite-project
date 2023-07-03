import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { shopiContext } from '../../Context';
import  OrderCard  from '../../Components/OrderCard'

import'./CheckoutShoping.css';


function CheckoutShoping () {

    const context = useContext(shopiContext);
    console.log('info del producto: ', context.productInformacion);

    return(

        <aside className={`${context.checkoutShopingOpen ? 'flex' : 'hidden'} checkout-shoping flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-scroll`}>
            <div className='flex justify-between items-center p-6'>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => context.closeCheckoutShoping()}></XMarkIcon>
                </div>
                <h2 className='font-medium text-xl'>My Order</h2>
            </div>
            <div className='px-6'>
                {
                    context.addCards.map( addCard => (
                        <OrderCard 
                            key={addCard.id}
                            title={addCard.title}
                            imageUrl={addCard.image}
                            price={addCard.price}
                        />
                    ))
                }
            </div>
        
        </aside>

    );
}

export default CheckoutShoping;