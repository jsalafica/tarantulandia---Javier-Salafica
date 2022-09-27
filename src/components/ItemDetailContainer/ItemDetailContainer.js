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

        // getProduct.then((response) => {
        //     setProducto(response);
        // })
        // .catch((error) => console.log(error));
    });

    const getProduct = () => {
        const queryDoc = doc(db, 'items', id);
        getDoc(queryDoc)
        .then((res)=>{
            setProducto({ id: res.id, ...res.data()});
        })
        .catch(err => console.log(err));
    }

    // const getProduct = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         // resolve(data[id-1]);
    //         resolve(data.find((item) => item.id === Number(id)));
    //     },100);
    // });

    return (
        <>
            <ItemDetail item={producto} />
        </>
    );

}

export default ItemDetailContainer;