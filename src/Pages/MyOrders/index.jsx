import { useContext } from 'react';
import { shopiContext } from '../../Context';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';



function MyOrders() {
  const context = useContext(shopiContext);

    return (
      
        <Layout>
          <div className='flex items-center justify-center relative w-80 mb-3'>
            <h1 className='font-medium text-xl'>My Orders</h1>
          </div>
          
          {
            context.order.map( (order, index) => (
              <Link 
              key={index} 
              to={`/MyOrders/${index}`}>
                <OrdersCard 
                  totalPrice={order.totalPrice} 
                  totalProducts={order.totalProducts}  
                />
              </Link>
            ))
          }
          
        </Layout>
      
    );
  }
  
  export default MyOrders;