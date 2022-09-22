import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Items.css';
import getData from "../../dataBase/mockAPI";
import ItemList from './ItemList';

function ItemListContainer() {
    let [data, setData] = useState([]);

    useEffect(
        () => {
            getData().then((respuesta) => {
                setData(respuesta);
                console.log("data recibida", data);
            });
        },
        []
    )

    return (
        <div>
            <h2>Productos de la tienda</h2>
            <ItemList data={data} />
            <div className='contador'>
                <ItemCount initial={1} stock={5} />
                <ItemCount initial={1} stock={2} />
                <ItemCount initial={1} stock={10} />
            </div>
        </div>
    );
}

export default ItemListContainer; 