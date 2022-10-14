import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ lista }) => {
    return (
        <div className="listaItems">
            {lista.map((product) => (product.stock!==0) ? 
                (<Link
                    key={product.id}
                    to={`/details/${product.id}`}
                    style={{textDecoration: 'none'}}
                    >
                    <Item
                    title={product.title}
                    stage={product.stage}
                    price={product.price}
                    image={product.image}
                    stock={product.stock}
                    />
                </Link>)
                :
                (<Item 
                    title={product.title}
                    stage={product.stage}
                    price={product.price}
                    image={product.image}
                    stock={product.stock}
                />)
            )}
        </div>
    );
};

export default ItemList;