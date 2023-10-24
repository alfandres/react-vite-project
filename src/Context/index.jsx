// import { data } from 'autoprefixer';
import { createContext, useState, useEffect } from 'react';  

const shopiContext = createContext();

const ShopiProvider = ({children}) => {

// Sign In: firebase
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');

//LoadingScreen:
  const [loading, setLoading] = useState(true);

// ShoppingCart: contador
  const [count, setCount] = useState(0);

// ShoppingCart: agrgar al carro de compras 
  const [addCards, setAddCards] = useState([]);

// ShoppingCart: quantity
  const [cartItems, setCartItems] = useState({});

// ShoppingCart: My order
  const [order, setOrder] = useState([]);
  
// productInfo: open/close
    const [productInfoOpen, setProductInfoOpen] = useState(false);
    const openProductInfo = () => setProductInfoOpen(true);
    const closeProductInfo = () => setProductInfoOpen(false);

// productInfo: informacion de los productos 
    const [productInformacion, setProductInformacion] = useState({});

// productInfo: open/close
    const [checkoutShopingOpen, setCheckoutShopingOpen] = useState(false);
    const openCheckoutShoping = () => setCheckoutShopingOpen(true);
    const closeCheckoutShoping = () => setCheckoutShopingOpen(false);    

// Get products
  const [items , setItems] = useState(null);

  const [filteredItems , setFilteredItems] = useState(null);
  
// Get products by title
    const [searchByTitle , setSearchByTitle] = useState('');
  
// Get products by search category
    const [searchByCategory , setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setItems(data))
  
  }, []);

  // Simulación de una operación asincrónica con un retraso de 3 segundos.
  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    
  }, []);

  const addToCart = (productId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [productId]: (prevCartItems[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      
      if (updatedCartItems[productId] > 1) {
        updatedCartItems[productId] -= 1;
      } else {
        delete updatedCartItems[productId];
      }
      return updatedCartItems;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase())); 
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {

    if (searchType === 'BY_TITLE'){
      return filteredItemsByTitle(items, searchByTitle);
    } 
    if(searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items,searchByCategory);
    }
    if(searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }
    if(!searchType){
      return items;
    }
  }

  useEffect(() => {
    if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory)); 

    if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory)); 

    if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory)); 
    
    if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory)); 
    
  }, [items, searchByTitle, searchByCategory]); 

  return(
      <shopiContext.Provider value={{
          count,
          setCount, 
          openProductInfo,
          closeProductInfo,
          productInfoOpen,
          productInformacion,
          setProductInformacion,
          addCards,
          setAddCards,
          checkoutShopingOpen,
          openCheckoutShoping,
          closeCheckoutShoping,
          order,
          setOrder,
          items,
          setItems,
          searchByTitle,
          setSearchByTitle,
          filteredItems,
          searchByCategory,
          setSearchByCategory,
          addToCart,
          removeFromCart,
          cartItems,
          clearCart,
          loading,

        }}>
        {children}
      </shopiContext.Provider>    
    );

}

export {shopiContext, ShopiProvider};