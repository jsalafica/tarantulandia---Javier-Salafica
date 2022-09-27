import "./ItemListContainer.css";
// import data from "../mockData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const {categoryName} = useParams();
    const {stageStatus} = useParams();

    useEffect(() => {
        getProducts();
        // getProducts.then((response) => {
        //     setProductList(response);
        // })
        // .catch((error) => console.log(error));
    },[categoryName, stageStatus]);

    //Firebase
    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items');

        if(categoryName){
            const queryFilter = query(querySnapshot, where ("categoryId", "==", categoryName));
            getDocs(queryFilter).then((response) => {
                const data = response.docs.map((product) => {
                    return { id:product.id, ...product.data() };
                })
                setProductList(data);
                console.log(`Categoria: ${categoryName}`);
            })
        } else if(stageStatus){
            const queryFilter = query(querySnapshot, where ("stage", "==", stageStatus));
            getDocs(queryFilter).then((response) => {
                const data = response.docs.map((product) => {
                    return { id:product.id, ...product.data() };
                })
                setProductList(data);
                console.log(`Categoria: ${categoryName}`);
            })
        } else {
            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((product) => {
                    return { id:product.id, ...product.data() };
                })
                setProductList(data);
                console.log('Todos');
            })
        }
    }

    // const getProducts = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if(categoryName!==undefined){
    //             resolve(data.filter((item) => item.category === categoryName));
    //         } else if(stageStatus!==undefined){
    //             resolve(data.filter((item) => item.stage === stageStatus));
    //         } else {
    //             resolve(data);
    //         }
    //     },100);
    // });

    return (
        <>
            <ItemList lista={productList} />
        </>
    );
}

export default ItemListContainer;