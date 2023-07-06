import { XMarkIcon } from '@heroicons/react/24/solid';

function OrdersCard (props) {

const { totalPrice, totalProducts } = props;



    return (
        <div className='flex justify-between items-center mb-4 border border-black rounded-lg w-80 p-4'>
            <div className=' m-1 text-lg flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.23</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </p>
                <span className='font-medium text-2xl'>{totalPrice}</span>
            </div>
        </div>
    );
}
export default OrdersCard;