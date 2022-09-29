import React, { useState, useEffect } from 'react';
import { geItem } from '../../dataBase/mockAPI';
import "./ItemDetail.css";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    let [data, setData] = useState({});

    const { id } = useParams();

    useEffect(
        () => {
            geItem(id).then((respuesta) => setData(respuesta));
            console.log("Data recibida", data);
        },);

    return (
        <div className='Item-contenedor'>
            <div>
                <img className="Item-img" src={data.img} alt=""></img>
            </div>
            <div className="Item-detail">
                <div className="card-detail">
                    <h2>
                        {data.title}
                    </h2>
                    <h3>Autor : {data.author}</h3>
                    <p className="descripcion">Género: {data.gender}</p>
                    <p>Sinospsis: {data.sinopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer;