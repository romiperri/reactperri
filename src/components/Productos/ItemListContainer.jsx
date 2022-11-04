import React, { useState, useEffect } from 'react';
import { getData, getItemsCategory } from "../../dataBase/firestore";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { LeapFrog } from '@uiball/loaders'



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
            <div className='flex justify-center p-8'>
                {isLoading && <LeapFrog
                    size={85}
                    speed={2.5}
                    color="orange"
                />}
            </div>

            <div>

                <ItemList data={data} />

            </div>

        </div>)
}

export default ItemListContainer; 