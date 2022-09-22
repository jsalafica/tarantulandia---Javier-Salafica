import "./ItemListContainer.css";
import data from "../mockData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const {categoryName} = useParams();
    const {stageStatus} = useParams();
    // console.log(categoryName);
    // const filterData = data.filter((item) => item.category === categoryName);

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        })
        .catch((error) => console.log(error));
    });

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(categoryName!==undefined){
                resolve(data.filter((item) => item.category === categoryName));
            } else if(stageStatus!==undefined){
                resolve(data.filter((item) => item.stage === stageStatus));
            } else {
                resolve(data);
            }
        },100);
    });

    return (
        <>
            <ItemList lista={productList} />
        </>
    );
}

export default ItemListContainer;