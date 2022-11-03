import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ item }) {
    const [estadoCart, setEstadoCart] = useState(false);
    const { addItem } = useContext(cartContext)

    function handleAddToCart(count) {
        addItem(item, count)

        setEstadoCart(true);

    }

    return (
        <div className="container p-8">
            <div className="flex justify-around ">
                <div>
                    <img className="Item-img" src={item.img} alt=""></img>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">
                        {item.title}
                    </h2>
                    <p className='py-3'> Autor: {item.author}</p>
                    <p className="descripcion">Género: {item.genre}</p>
                    <p className="py-3 ">Precio unitario: ${item.price}</p>
                </div>
                <div>
                    {estadoCart === false ? (<ItemCount
                        stock={item.stock}
                        onAddToCart={handleAddToCart}
                    />) : (<Link className='items-center bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-1 px-5 border border-orange-500 hover:border-transparent rounded' to={"/cart"}>Finalizar compra</Link>)}
                </div>
            </div>
            <div className="py-6">
                <p className="text-sm tracking-wider leading-relaxed "> Sinopsis <br />
                    <hr />
                    {item.sinopsis}
                </p>
            </div>
        </div>

    )
}

export default ItemDetail;