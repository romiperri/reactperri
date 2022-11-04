import React from 'react';
import { Link } from "react-router-dom";

function Item(props) {
    let { title, img, id } = props;

    const urlDetail = `/detail/${id}`;

    return (


        <div>
            <div className='flex flex-col items-center p-2 m-5'>
                <div className="cardImg">
                    <img src={img} alt="card imagen" />
                </div>
                <div className="cardDetail">
                    <h2 className='text-sm text-center p-2 '>{title}</h2>
                </div>
                <Link to={urlDetail}>
                    <button className='items-center bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-1 px-5 border border-orange-500 hover:border-transparent rounded'> Ver más </button>
                </Link>
            </div>
        </div>
    );
}

export default Item; 