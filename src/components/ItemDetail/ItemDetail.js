import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const stock = item.stock;
  const [cantidad, setCantidad] = useState(1);
  const { addItem } = useContext(CartContext);

  const onAdd = (item) => {
    addItem(item, cantidad);
  }

  return (
    <div className='itemDetail'>
      <img src={item.image} alt="imagen" />
      <h2>{item.title}</h2>
      <h3>{item.stage}</h3>
      <h4>{item.description}</h4>
      <h3>${item.price}</h3>
      <h4>Stock: {item.stock}</h4>
      <ItemCount setCantidad = {setCantidad} cantidad = {cantidad} stock = {stock} />
      <div className="link">
        <Link to={'/cart'} onClick={() => onAdd(item)}>Agregar al carrito</Link>
      </div>
    </div>
  )
}

export default ItemDetail