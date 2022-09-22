import './Cart.css';
import '../ItemDetail/ItemDetail.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext);
    if(cart.length!==0){
        return (
            <>
            <button onClick={()=>clear()}>Vaciar carrito</button>
            <div className='listaItemsCart'>
                {cart.map((item) => (
                    <div className='item' key={item.id}>
                        <img src={item.image} alt="title" />
                        <h2>{item.title}</h2>
                        <h3>{item.stage}</h3>
                        <h4>Precio: ${item.price}</h4>
                        <h4>Cantidad: {item.quantity}</h4>
                        <button onClick={()=>removeItem(item.id)}>Remover</button>
                    </div>
                ))}
            </div>
            </>
        )    
    } else {
        return (
            <div>
                <h2>Carrito vacío</h2>
                <Link to="/">Volver</Link>
            </div>)
    }
}

export default Cart