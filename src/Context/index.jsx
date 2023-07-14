import { createContext, useState, useEffect } from 'react';  
import { useLocalStorage } from './useLocalStorage';

const shopiContext = createContext();

const ShopiProvider = ({children}) => {

  // const {
  //   art: order,
  //   saveArt: setOrder
  // } = useLocalStorage('ORDER_V1', []);

// ShoppingCart: contador
    const [count, setCount] = useState(0);

// ShoppingCart: agrgar al carro de compras 
    const [addCards, setAddCards] = useState([]);

// ShoppingCart: My order
  const [order, setOrder] = useState([]);

// productInfo: open/close
    const [productInfoOpen, setProductInfoOpen] = useState(false);
    const openProductInfo = () =>  setProductInfoOpen(true);
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

// Get products by search
    const [searchByTitle , setSearchByTitle] = useState(null);
// Get products by search category
    const [searchByCategory , setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products',{
      method:"PUT",
            body:JSON.stringify(
                {
                  quantity: 1   
                }
            )
    })
    
    .then(res => res.json())
    .then(data => setItems(data))
  
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase())); 
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {

    if (searchType === 'BY_TITLE'){
      return filteredItemsByTitle(items, searchByTitle);

    }else if(searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items,searchByCategory);

    }else if(searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));

    }else if(!searchType){
      return items;
    }
  }

  useEffect(() => {
    if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory)); 

    if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory)); 

    if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory)); 
    
    if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null , items, searchByTitle, searchByCategory)); 
    
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
          filteredItemsByCategory
        }}>
        {children}
      </shopiContext.Provider>    
    );

}

export {shopiContext, ShopiProvider};