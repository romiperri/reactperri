import React, { useState, useEffect } from 'react';
import { geItem } from '../../dataBase/firestore';
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { ChaoticOrbit } from '@uiball/loaders'



function ItemDetailContainer() {
    const [data, setData] = useState({});

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(
        () => {
            geItem(id)
                .then((respuesta) => setData(respuesta))
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
                    <ChaoticOrbit
                        size={40}
                        speed={1.5}
                        color="lightblue"
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