import React, { useState, useEffect } from 'react';
/* import ItemCount from '../ItemCount/ItemCount';
 */
import './Items.css';
import getData, { getItemsCategory } from "../../dataBase/mockAPI";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { cat } = useParams();

    useEffect(() => {
        if (cat === undefined) {
            getData().then((respuesta) => setData(respuesta));
        }
        else {
            getItemsCategory(cat)
                .then((respuesta) => setData(respuesta))
                .finally(() => setIsLoading(false))
        }
    }, [cat]);

    
    return (
        <div>
            <h2>Productos de la tienda</h2>
            <ItemList data={data} />

        </div>
    );
}

export default ItemListContainer; 