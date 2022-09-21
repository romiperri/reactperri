import React, { useState } from 'react';
import './ItemCount.css'

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    function sumar() {
        if (count < props.stock) {
            setCount(count + 1);
        } else {
            alert('No hay más disponibles en stock');
        }
    }


    function restar() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function agregar() {
        alert('Agregado al carrito');
    }

    return (
        <div>
            <button className='buttonRestar' onClick={restar}>-</button>
            <span className='cantidad'>{count}</span>
            <button className='buttonSumar' onClick={sumar}>+</button>
            <div>
                <button className='buttonAdd' onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount