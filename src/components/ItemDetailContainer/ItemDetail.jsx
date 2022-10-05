import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";


function ItemDetail({ course }) {

    const [estadoCart, setEstadoCart] = useState(false);

    function handleAddToCart(count) {
        setEstadoCart(true);
        alert(`Agregaste al carrito, ${count} ${course.title}`);
    }

    return (
        <div className='Item-contenedor'>
            <div>
                <img className="Item-img" src={course.img} alt=""></img>
            </div>
            <div className="Item-detail">
                <div className="card-detail">
                    <h2>
                        {course.title}
                    </h2>
                    <h3>Autor : {course.author}</h3>
                    <p className="descripcion">Género: {course.genre}</p>
                    <p>Sinopsis: {course.sinopsis}</p>
                </div>
                {estadoCart === false ? (<ItemCount
                    stock={course.stock}
                    onAddToCart={handleAddToCart}
                />) : (<Link className='btnFin' to={"/cart"}>Finalizar compra</Link>)}

            </div>
        </div>
    )
}

export default ItemDetail;