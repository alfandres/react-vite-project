import { createContext, useState } from 'react';  

const shopiContext = createContext();

const ShopiProvider = ({children}) => {

    const [count, setCount] = useState(0);
    console.log('cout: ', count);

    return(
        <shopiContext.Provider value={{
            count,
            setCount, 
        }}>
        {children}
        </shopiContext.Provider>    
    );

}

export {shopiContext, ShopiProvider};