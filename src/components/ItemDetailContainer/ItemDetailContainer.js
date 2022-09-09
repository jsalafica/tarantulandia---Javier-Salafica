import "./ItemDetailContainer.css";
import data from "../mockData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getProduct.then((response) => {
            setProducto(response);
        })
        .catch((error) => console.log(error));
    });

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data[2]);
        },2000);
    });

    return (
        <>
            <ItemDetail item={producto} />
        </>
    );

}

export default ItemDetailContainer;