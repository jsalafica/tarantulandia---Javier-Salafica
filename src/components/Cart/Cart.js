import './Cart.css';
import '../ItemDetail/ItemDetail.css'
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment/moment';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Cart = () => {
    const MySwal = withReactContent(Swal);
    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        // didOpen: (toast) => {
        //     toast.addEventListener('mouseenter', Swal.stopTimer)
        //     toast.addEventListener('mouseleave', Swal.resumeTimer)
        // }
    })

    const {cart, removeItem, clear} = useContext(CartContext);
    const db = getFirestore();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const createOrder = () => {
        const order = {
            buyer: {
                name: `${values.name}`,
                phone: `${values.phone}`,
                email: `${values.email}`
            },
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: moment().format()
        };
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({ id }) => {
            updateStockProducts();
            MySwal.fire({
                icon: 'success',
                title: 'Compra realizada con exito',
                html: `Total de la compra: $${order.total}<br>Código de compra: ${id}`,
                showConfirmButton: true,
                // timer: 1500
                });
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
                    clear(product.id);
                    navigate('/');
                }
            })
            .catch(()=>{
                console.log('Error al actualizar stock');
            })
        });
    }

    const submitOrder = (e) => {
        e.preventDefault();
        if (!values.name || !values.email || !values.phone) {
            // MySwal.fire({
            //     icon: 'error',
            //     title: 'Error...',
            //     text: 'Los campos no pueden estar vacíos',
            //     footer: 'Formulario'
            // });
            Toast.fire({
                icon: 'error',
                title: 'Los campos no pueden estar vacíos'
            });
        } else {
            createOrder();
        }    
    }

    const handleChange = (e) =>{
        const { target } = e;
        const { name, value } = target;
        const newValues = {...values, [name]: value,};
        setValues(newValues);
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
                        <button onClick={()=>removeItem(item)}>Remover</button>
                    </div>
                ))}
            </div>
            <div>
                <form className='formOrder' onSubmit={submitOrder}>
                    <div style={{border: "10px 10px 10px 10px"}}>
                        <label htmlFor="name">Nombre </label>
                        <input id="name" name="name" type="name" value={values.name} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="phone">Telefono </label>
                        <input id="phone" name="phone" type="number" value={values.phone} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail </label>
                        <input id="email" name="email" type="email" value={values.email} onChange={handleChange}></input>
                    </div>
                    <button type="submit">Crear orden</button>
                </form>
            </div>
            {/* <button onClick={createOrder}>Crear orden</button> */}
            </>
        )    
    } else {
        return (
            <div>
                <h1 style={{marginTop: '20px'}}>Carrito vacío</h1>
                <Link to="/"><h4>Volver</h4></Link>
            </div>)
    }
}

export default Cart