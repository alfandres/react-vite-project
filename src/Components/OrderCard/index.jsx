import { useContext } from 'react';
import { shopiContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid';

function OrderCard (props) {
    
    const {id, title, imageUrl, price, shopingDelete} = props;

    const context = useContext(shopiContext);

    let renderXMarkIcon;
    if (shopingDelete) {
        renderXMarkIcon = <XMarkIcon onClick={() => shopingDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
    }

    const handleIncrement = () => {
        context.addToCart(id);
      };
     
      const handleDecrement = () => {
        context.removeFromCart(id);
      };

    let renderButtonHandleIncrement;
    if (shopingDelete){
        renderButtonHandleIncrement = <button onClick={handleIncrement}>+</button>
    }

    let renderButtonHandleDecrement;
    if (shopingDelete){
        renderButtonHandleDecrement = <button onClick={handleDecrement}>-</button> 
    }
    
    const priceTotalProduct = price  ;
    
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex flex-col items-center'>
                {renderButtonHandleIncrement}
                <span className="px-2">{context.cartItems[id] || 1}Uni</span>
                {renderButtonHandleDecrement}
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-mediuma'>{priceTotalProduct}</p>
                {renderXMarkIcon}
            </div>
        </div>
    );
}
export default OrderCard;