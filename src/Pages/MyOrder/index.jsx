import { useContext } from 'react';
import { shopiContext } from '../../Context';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {

  const context = useContext(shopiContext); 
  console.log(context.order.slice(-1)[0])
 
    return (
      <Layout>
         <div className='flex items-center justify-center relative w-80 mb-6'>
            <Link to='/MyOrders' className='absolute left-0'>
              <ChevronDoubleLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
            </Link>
            <h1>MyOrder</h1>
          </div>

        <div className='flex flex-col w-80'>
          {
            context.order?.slice(-1)[0].products.map( product => (
              <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
              />
            ))
          }
        </div>
      </Layout>
    );
  }
  
  export default MyOrder;