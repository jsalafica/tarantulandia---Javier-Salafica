import "./ItemDetailContainer.css";
import data from "../mockData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProduct.then((response) => {
            setProducto(response);
            // console.log(response);
        })
        .catch((error) => console.log(error));
    });

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(data[id-1]);
            resolve(data.find((item) => item.id === Number(id)));
        },100);
    });

    return (
        <>
            <ItemDetail item={producto} />
        </>
    );

}

export default ItemDetailContainer;