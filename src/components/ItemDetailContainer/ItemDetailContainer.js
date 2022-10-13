import "./ItemDetailContainer.css";
// import data from "../mockData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    //Firebase
    const db = getFirestore();

    useEffect(() => {
        getProduct();
    },[id]);

    const getProduct = () => {
        const queryDoc = doc(db, 'items', id);
        getDoc(queryDoc)
        .then((res)=>{
            setProducto({ id: res.id, ...res.data()});
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <ItemDetail item={producto} />
        </>
    );

}

export default ItemDetailContainer;