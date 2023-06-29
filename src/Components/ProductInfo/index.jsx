import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { shopiContext } from '../../Context';

import'./ProductInfo.css';


function ProductInfo () {
    const context = useContext(shopiContext);

    return(

        <aside className={`${context.productInfoOpen ? 'flex' : 'hidden'} product-info flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => context.closeProductInfo()}></XMarkIcon>
                </div>
            </div>

        </aside>

    );
}

export default ProductInfo;