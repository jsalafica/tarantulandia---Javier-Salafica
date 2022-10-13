import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CartProvider = ({children}) => {
    
    const MySwal = withReactContent(Swal);
    const [cart, setCart] = useState([]);
    const [itemCart, setItemCart] = useState(0);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            MySwal.fire({
                icon: 'danger',
                title: 'Atención',
                html: `El producto <b>${item.title}</b> ya está en el carrito`,
                showConfirmButton: true,
                // timer: 1500
                });
        } else {
            setCart([...cart, {...item, quantity},]);
            MySwal.fire({
                icon: 'success',
                title: 'Genial!',
                html: `El producto <b>${item.title}</b> fué agregado al carrito con éxito`,
                showConfirmButton: true,
                // timer: 1500
                });
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const clear = (id) => {
        if(!id){
            MySwal.fire({
                title: 'Vaciar carrito?',
                text: "Su carrito se vaciará!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, vaciar!'
            }).then((result) => {
                    if (result.isConfirmed) {
                        setCart([]);
                        Swal.fire(
                            'Vacío!',
                            'Su carrito ha sido vaciado.',
                            'success'
                        )
                    }
                });
        } else {
            setCart([]);
        }
    }

    const removeItem = (product) => {
        MySwal.fire({
            title: 'Eliminar producto?',
            html: `Se eliminará el producto <b>${product.title}</b>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
                if (result.isConfirmed) {
                    setCart(cart.filter((item) => item.id !== product.id));
                    Swal.fire(
                        'Eliminado!',
                        'El producto ha sido eliminado.',
                        'success'
                    )
                }
            });
    }

    useEffect(()=>{
        // setItemCart(cart.length);
        setItemCart(cart.reduce((acc, numero) => acc + numero.quantity,0));
    },[cart]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, itemCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider