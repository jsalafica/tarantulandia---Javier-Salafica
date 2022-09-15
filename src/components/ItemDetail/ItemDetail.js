import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const stock = 10;
  const [cantidad, setCantidad] = useState(0);
  const handleClick = () => {
    console.log(`Agregado: ${cantidad}`);
  };
  return (
    <div className='item'>
      <img src={item.image} alt="title" />
      <h2>{item.title}</h2>
      <h3>{item.stage}</h3>
      <h4>{item.detail}</h4>
      <h3>${item.price}</h3>
      <ItemCount setCantidad = {setCantidad} cantidad = {cantidad} stock = {stock}/>
      <div className="link">
        <Link to={'/cart'} onClick={handleClick}>Terminar</Link>
      </div>
    </div>
  )
}

export default ItemDetail