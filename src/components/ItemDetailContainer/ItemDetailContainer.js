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
            if(res.title===undefined){
                document.getElementById("productoNoEncontrado").style.display = "block";
            } else {
                document.getElementById("productoNoEncontrado").style.display = "none";
            }
        })
        .catch(err => console.log(err));
    }

    return (
        producto.title!==undefined ?
        <>
            {console.log(producto.title)};
            <ItemDetail item={producto} />
        </>
        :
        <h3 id="productoNoEncontrado" style={{display: "none"}}>Producto no encontrado</h3>
    )
}

export default ItemDetailContainer;