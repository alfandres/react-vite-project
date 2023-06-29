import { createContext, useState } from 'react';  

const shopiContext = createContext();

const ShopiProvider = ({children}) => {
//ShoppingCart: contador
    const [count, setCount] = useState(0);

//productInfo: open/close
    const [productInfoOpen, setProductInfoOpen] = useState(false);
    const openProductInfo = () =>  setProductInfoOpen(true);
    const closeProductInfo = () => setProductInfoOpen(false);

//productInfo: informacion de los productos 
    const [productInformacion, setProductInformacion] = useState({});


    return(
        <shopiContext.Provider value={{
            count,
            setCount, 
            openProductInfo,
            closeProductInfo,
            productInfoOpen,
            productInformacion,
            setProductInformacion
        }}>
        {children}
        </shopiContext.Provider>    
    );

}

export {shopiContext, ShopiProvider};