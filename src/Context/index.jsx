import { createContext, useState, useEffect } from 'react';  

const shopiContext = createContext();

const ShopiProvider = ({children}) => {

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
    const openCheckoutShoping = () =>  setCheckoutShopingOpen(true);
    const closeCheckoutShoping = () => setCheckoutShopingOpen(false);    

// Get products
  const [items , setItems] = useState(null);

// Get products by search
    const [searchByTitle , setSearchByTitle] = useState(null);
console.log(searchByTitle)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setItems(data))
  
  }, []);

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
            setSearchByTitle
        }}>
        {children}
        </shopiContext.Provider>    
    );

}

export {shopiContext, ShopiProvider};