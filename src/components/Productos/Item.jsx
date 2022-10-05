import React from 'react';
import "./Card.css";
import {Link} from "react-router-dom"; 

function Item(props) {
    let { price, title, img, genre,id } = props;
    
    const urlDetail = `/detail/${id}`; 

    return (
        <div className='card'>
            <div className="cardImg">
                <img src={img} alt="card imagen" />
            </div>
            <div className="cardDetail">
                <h3>{title}</h3>
                <p>{genre}</p>
                <h4>${price}</h4>
            </div>
            <Link to={urlDetail}>
                <button className='btn-ver'> Ver más</button>
            </Link>
        </div>
    );
}

export default Item; 