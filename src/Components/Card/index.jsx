import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { shopiContext } from '../../Context';

function Card ({data}) {
const context = useContext(shopiContext);

const infoProduct = (productDetail) => {
    context.openProductInfo();     
    context.setProductInformacion(productDetail);
}

const addProductToCard = ( event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setAddCards([...context.addCards, productData]);
    context.openCheckoutShoping();      

    console.log('card product: ', context.addCard);
}
    return (
        <div 
        className=' bg-white cursor-pointer w-40 h-50 rounded-lg'
        onClick={() => infoProduct(data)}> 
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.image} alt={data.title} />
                <button
                className='absolute top-0  right-0 flex justify-center items-center bg-white/60 w-6 h-6 rounded-full m-2 p-1'
                onClick={(event) => addProductToCard(event, data)}>
                    <PlusIcon className='h-6 w-6 text-black cursor-pointer'></PlusIcon>
                </button>
            </figure>
            <p className='flex justify-between'>  
                <span className='text-md font-light truncate mr-2'>{data.title}</span>
                <span className='text-lg font-medium'>${data.price}</span>
            </p>
        </div>

    );
}

export default Card;