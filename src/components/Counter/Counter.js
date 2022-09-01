import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const stock = 10;
    const [cantidad, setCantidad] = useState(0);

    const suma = () => {cantidad < stock ? setCantidad(cantidad + 1) : alert(`Se llegó al máximo: ${stock}`);
    };
    const resta = () => {cantidad > 0 ? setCantidad(cantidad - 1) : alert ('Se llegó al mínimo: 0');
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

export default Counter;