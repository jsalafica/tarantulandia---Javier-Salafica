import './Cart.css';
import '../ItemDetail/ItemDetail.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment/moment';

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext);
    const db = getFirestore();
    const navigate = useNavigate();

    const createOrder = () => {
        const order = {
            buyer: {
                name: 'Juan',
                phone: '123456789',
                email: 'test@test.com'
            },
            items: cart,
            total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.price * valorActual.quantity), 0),
            date: moment().format()
        };
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({ id }) => {
            // console.log(id);
            updateStockProducts();
            alert(`Gracias por su compra.
            Total: $${order.total}
            Código de compra: ${id}
                `);
        })
        .catch(() => alert('Error al completar tu compra'));
    }

    const updateStockProducts = () => {
        cart.forEach(product => {
            const queryUpdate = doc(db, 'items', product.id);
            updateDoc(queryUpdate, {
                categoryId: product.categoryId,
                description: product.description,
                image: product.image,
                price: product.price,
                title: product.title,
                stock: product.stock - product.quantity
            })
            .then(()=>{
                if(cart[cart.length -1].id === product.id){
                    clear();
                    navigate('/');
                }
            })
            .catch(()=>{
                console.log('Error al actualizar stock');
            })
        });
    }

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
            <button onClick={createOrder}>Crear orden</button>
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