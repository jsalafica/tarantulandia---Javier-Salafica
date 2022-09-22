import { useState } from "react";

import { CartContext } from "./CartContext";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            alert('Ya està en el carrito');
        } else {
            setCart([...cart, {...item, quantity},]);
            // console.log('cart', [...cart, {...item, quantity},]);
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const clear = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider