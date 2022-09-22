import "./ItemCount.css";

const ItemCount = ({setCantidad, cantidad, stock}) => {
    
    const suma = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    };
    const resta = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    return (
        <>
            <p>Cantidad</p>
            <h3>{cantidad}</h3>
            <button type="button" onClick={resta}>-</button>
            <button type="button" onClick={suma}>+</button>
        </>
    );
};

export default ItemCount;