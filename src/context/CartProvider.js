import { useState } from "react";

import { CartContext } from "./CartContext";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [itemCart, setItemCart] = useState(0);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            alert('Ya està en el carrito');
        } else {
            setCart([...cart, {...item, quantity},]);
            setItemCart(cart.length);
            console.log(cart.length);
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const clear = () => {
        setCart([]);
        setItemCart(0)
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        setItemCart(cart.length);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, itemCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider