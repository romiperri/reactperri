import React, { useState, useEffect } from 'react';
import { geItem } from '../../dataBase/mockAPI';
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    let [data, setData] = useState({});

    const { id } = useParams();

    useEffect(
        () => {
            geItem(id).then((respuesta) => setData(respuesta));
            console.log("Data recibida", data);
        },);

    return (
        <div>
            <ItemDetail course={data} />
        </div>
    );

}

export default ItemDetailContainer;