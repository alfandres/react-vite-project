import { useContext } from 'react';
import { shopiContext } from '../../Context';
import quantityProducts from '../QuantityProducts';
import { XMarkIcon } from '@heroicons/react/24/solid';

function OrderCard (props) {

const {id, title, imageUrl, price, quantity, shopingDelete} = props;
let renderXMarkIcon
if (shopingDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => shopingDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
}

const { addCards, setAddCards } = useContext(shopiContext); 
   
 quantityProducts(addCards);

    const increaseQuantity = () => {
        const updatedQuantities = { ...addCards.quantity }
        updatedQuantities[id] = (updatedQuantities[id] || 1) + 1
        setAddCards(updatedQuantities)
        console.log(updatedQuantities[id])
    }

    const decreaseQuantity = () => {
        const updatedQuantities = { ...addCards.quantity }
        updatedQuantities[id] = Math.max((updatedQuantities[id] || 1) - 1, 1)
        setAddCards(updatedQuantities)
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex flex-col items-center'>
                <button onClick={decreaseQuantity}>-</button>
                <span className="px-2">{addCards[id] || 1}</span>
                <button onClick={increaseQuantity}>+</button> 
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-mediuma'>{price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    );
}
export default OrderCard;