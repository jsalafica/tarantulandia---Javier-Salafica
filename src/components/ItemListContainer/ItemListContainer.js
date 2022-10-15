import "./ItemListContainer.css";
// import data from "../mockData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import Titulo from "../Titulo/Titulo";

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const { categoryName,stageStatus } = useParams();

    //Firebase
    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, 'items');
        const querySnapshot = categoryName
            ? query(queryBase, where("categoryId", "==", categoryName))
            : stageStatus
            ? query(queryBase, where ("stage", "==", stageStatus))
            : queryBase;

        getDocs(querySnapshot).then((response) => {
            const data = response.docs.map((product) => {
                return { id:product.id, ...product.data() };
            })
            setProductList(data);
        });
    }
    
    useEffect(() => {
        getProducts();
    },[categoryName,stageStatus]);

    return (
        <>
            {categoryName ?
                <Titulo titulo={categoryName}/>
                : 
                stageStatus ?
                    <Titulo titulo={stageStatus}/>
                :
                <Titulo titulo="Todas las especies"/>
            }
            <ItemList lista={productList} />
        </>
    );
}

export default ItemListContainer;