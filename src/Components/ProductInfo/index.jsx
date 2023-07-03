import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { shopiContext } from '../../Context';

import'./ProductInfo.css';


function ProductInfo () {
    const context = useContext(shopiContext);
    console.log('info del producto: ', context.productInformacion);
    return(

        <aside className={`${context.productInfoOpen ? 'flex' : 'hidden'} product-info flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-scroll`}>
            <div className='flex justify-between items-center p-6'>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => context.closeProductInfo()}></XMarkIcon>
                </div>
                <h2 className='font-medium text-xl'>Detail</h2>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                src={context.productInformacion.image} 
                alt={context.productInformacion.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-3'>${context.productInformacion.price}</span>
                <span className='font-medium text-md  mb-1'>{context.productInformacion.title}</span>
                <span className='font-medium text-sm '>{context.productInformacion.description}</span>
            </p>
        </aside>

    );
}

export default ProductInfo;