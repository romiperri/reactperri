import React, { useState, useEffect } from 'react';
import { geItem } from '../../dataBase/firestore';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { LeapFrog } from '@uiball/loaders'



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
        }, [id]);

    if (isLoading) {
        return (
            <>
                {error ? (
                    <div>
                        <h2>Error obteniendo los datos </h2>
                        <p>{error}</p>
                    </div>
                ) : (
                    <div className='flex justify-center p-8'>
                        <LeapFrog
                            size={85}
                            speed={2.5}
                            color="orange" />
                    </div>
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