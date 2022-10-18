import React, { useState, useEffect } from 'react';
/* import ItemCount from '../ItemCount/ItemCount';
 */
import './Items.css';
import { getData, getItemsCategory } from "../../dataBase/firestore";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { ChaoticOrbit } from '@uiball/loaders'


function ItemListContainer() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { cat } = useParams();

    useEffect(() => {
        setIsLoading(true);
        if (cat === undefined) {
            getData()
                .then((respuesta) => setData(respuesta))
                .finally(() => setIsLoading(false))
        }
        else {
            getItemsCategory(cat)
                .then((respuesta) => setData(respuesta))
                .finally(() => setIsLoading(false))
        }
    }, [cat]);

    return (
        <div>
            {isLoading && <ChaoticOrbit
                size={40}
                speed={1.5}
                color="lightblue"
            />}

            <div>
                <h2>Productos de la tienda</h2>
                <ItemList data={data} />

            </div>

        </div>)
}

export default ItemListContainer; 