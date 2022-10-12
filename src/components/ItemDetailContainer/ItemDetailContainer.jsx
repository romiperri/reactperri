import React, { useState, useEffect } from 'react';
import { geItem } from '../../dataBase/mockAPI';
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { Jelly } from '@uiball/loaders'



function ItemDetailContainer() {
    const [data, setData] = useState({});

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(
        () => {
            geItem(id).then((respuesta) => setData(respuesta))
                .catch((errormsg) => {
                    setError(errormsg.message);
                })
                .finally(() => setIsLoading(false));
        },);

    if (isLoading) {
        return (
            <>
                {error ? (
                    <div>
                        <h2>Error obteniendo los datos </h2>
                        <p>{error}</p>
                    </div>
                ) : (
                    <Jelly
                        size={80}
                        speed={0.9}
                        color="black"
                    />
                )
                }
            </>
        );
    }

    return (
        <div>
            <ItemDetail item={data} />
        </div>
    );

}

export default ItemDetailContainer;