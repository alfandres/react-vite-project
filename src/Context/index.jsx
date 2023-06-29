import { createContext, useState } from 'react';  

const shopiContext = createContext();

const ShopiProvider = ({children}) => {

    const [count, setCount] = useState(0);

    const [productInfoOpen, setProductInfoOpen] = useState(false);
    const openProductInfo = () =>  setProductInfoOpen(true);
    const closeProductInfo = () => setProductInfoOpen(false);

    return(
        <shopiContext.Provider value={{
            count,
            setCount, 
            openProductInfo,
            closeProductInfo,
            productInfoOpen
        }}>
        {children}
        </shopiContext.Provider>    
    );

}

export {shopiContext, ShopiProvider};