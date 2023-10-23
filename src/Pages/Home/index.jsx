import { useContext, useState } from 'react';
import { shopiContext } from '../../Context';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductInfo from '../../Components/ProductInfo';

function Home() {
  const context = useContext(shopiContext);
 
  const [searchTerm, setSearchTerm] = useState('');

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return(
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else  {
      return( 
        <div> We don't have anything </div> 
      )
    }   
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    context.setSearchByTitle(searchTerm);
  };

    return (
      
        <Layout>
          <div className='flex items-center justify-center relative w-80 mb-4'>
            <h1 className='font-medium text-xl'>Home</h1>
          </div>
          
          <div className='mb-8'>
            <input 
              type="text" 
              placeholder='Search a product' 
              className='border border-black rounded-l-lg w-80 p-4 focus:outline-none'
              value={searchTerm}
              onChange={handleSearch}
            />
             <button onClick={handleSearchSubmit} className=' ml-1 border border-black rounded-r-lg w-20 h-[58px] bg-[#299fff] hover:bg-red-500'>Search</button>
          </div>
          

          <div className='grid gap-1 grid-cols-4 w-full max-w-screen-lg'>
            {renderView()}
          </div>
          <ProductInfo />
        </Layout>
      
    );
  }
  
  export default Home;