import React, { useState, useEffect } from 'react';
import { geItem } from '../../dataBase/mockAPI';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
    let [data, setData] = useState([]);

    useEffect(
        () => {
            geItem().then((respuesta) => {
                setData(respuesta);
            });
        },
        [])

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer