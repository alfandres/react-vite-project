import { BeakerIcon } from '@heroicons/react/24/solid'
import'./ProductInfo.css';

function ProductInfo () {

    return(

        <aside className='product-info flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
            </div>

        </aside>

    );
}

export default ProductInfo;