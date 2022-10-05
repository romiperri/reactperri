import React, { useState } from 'react';
import './ItemCount.css'

//onAddToCart

function ItemCount({ stock, onAddToCart }) {
    const [count, setCount] = useState(1);

    function sumar() {
        if (count < stock) {
            setCount(count + 1);
        }
    }


    function restar() {
        if (count > 1) {
            setCount(count - 1);
        }
    }



    return (
        <div>
            <button className='buttonRestar' onClick={restar}>-</button>
            <span className='cantidad'>{count}</span>
            <button className='buttonSumar' onClick={sumar}>+</button>
            <div>
                <button className='buttonAdd' onClick={() => onAddToCart(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount