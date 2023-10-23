import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { shopiContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import getTotalPrice from '../../utils';
import { XMarkIcon } from '@heroicons/react/24/solid';

import'./CheckoutShoping.css';


function CheckoutShoping() {

    const context = useContext(shopiContext);

    const shopingDelete = (id) => {
        const filteredProducts = context.addCards.filter(addCard => addCard.id !=id)
        context.setAddCards(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '04.07.23',
            products: context.addCards,
            totalProducts: context.addCards.length,
            totalPrice: getTotalPrice(context.cartItems, context.addCards)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setAddCards([]); 
        context.setSearchByTitle(null)
        context.closeCheckoutShoping();
        context.clearCart();
    }
    

    return(

        <aside className={`${context.checkoutShopingOpen ? 'flex' : 'hidden'} checkout-shoping flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-scroll`}>
            <div className='flex justify-between items-center p-6'>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer hover:text-red-500' onClick={() => context.closeCheckoutShoping()}></XMarkIcon>
                </div>
                <h2 className='font-medium text-xl'>My Order</h2>
            </div>
            <div className='px-6 flex-1'>
                {
                    context.addCards.map( addCard => (
                        <OrderCard 
                            key={addCard.id}
                            id={addCard.id}
                            title={addCard.title}
                            imageUrl={addCard.image}
                            price={addCard.price}
                            shopingDelete={shopingDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <div className=' bg-black/25 w-full rounded-lg'>
                <p className='flex justify-between items-center mb-3'>
                    <span className='font-light ml-2'>Total:</span>
                    <span className='font-medium text-2xl mr-2'>${getTotalPrice(context.cartItems, context.addCards)}</span>
                </p>
                </div>
                <Link to='/MyOrders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg hover:bg-[#299fff]' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>

    );
}

export default CheckoutShoping;