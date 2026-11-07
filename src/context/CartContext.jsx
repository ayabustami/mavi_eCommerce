import {useState , createContext, use} from 'react'

export const CartContext = createContext();

export default function CartProvider({children}) {
    const [numberOfItems, setNumberOfItems] =useState(1);



    return 
        <>
        <CartContext.Provider value={{numberOfItems,setNumberOfItems}}>
            {children}
        </CartContext.Provider>
        
        </>

}
