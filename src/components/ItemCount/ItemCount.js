
import "./ItemCount.css";

const ItemCount = ({setCantidad, cantidad, stock}) => {
    

    const suma = () => {
        cantidad < stock ? setCantidad(cantidad + 1) : alert(`Se llegó al máximo: ${stock}`);
    };
    const resta = () => {
        // cantidad > 0 ? setCantidad(cantidad - 1) : alert ('Se llegó al mínimo: 0');
        cantidad > 0 && setCantidad(cantidad - 1);
    };

    return (
        <>
            <p>Cantidad</p>
            <h3>{cantidad}</h3>
            <button onClick={resta}>-</button>
            <button onClick={suma}>+</button>
        </>
    );
};

export default ItemCount;