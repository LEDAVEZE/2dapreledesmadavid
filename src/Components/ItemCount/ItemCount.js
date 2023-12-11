import { useState } from "react";
import "../ItemCount/ItemCount.css";


const ItemCount = ({stock, initial, onAdd}) => {

    const [quantily, setQuantily] = useState(initial);

    const increment = () => {
        if (quantily < stock) {
            setQuantily (quantily + 1)
        };
    };

    const decrement = () => {
        if (quantily > 1) {
            setQuantily (quantily - 1)
        };
    };

    return <>
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantily}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd (quantily)} disabled = {!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    
    </>
};

export default ItemCount;