import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

function ItemDetail({ item }) {
    const [estadoCart, setEstadoCart] = useState(false);
    const { addItem } = useContext(cartContext)

    function handleAddToCart(count) {
        addItem(item, count)

        setEstadoCart(true);

    }

    return (
        <div className='Item-contenedor'>
            <div>
                <img className="Item-img" src={item.img} alt=""></img>
            </div>
            <div className="Item-detail">
                <div className="card-detail">
                    <h2>
                        {item.title}
                    </h2>
                    <h3>Autor : {item.author}</h3>
                    <p className="descripcion">Género: {item.genre}</p>
                    <p> <strong>Precio: ${item.price}</strong></p>
                    <p>Sinopsis: {item.sinopsis}</p>
                </div>
                {estadoCart === false ? (<ItemCount
                    stock={item.stock}
                    onAddToCart={handleAddToCart}
                />) : (<Link className='btnFin' to={"/cart"}>Finalizar compra</Link>)}

            </div>
        </div>
    )
}

export default ItemDetail;