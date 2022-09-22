import React from 'react';
import "./Card.css";

function Item(props) {
    let { price, title, img, gender } = props;

    return (
        <div className='card'>
            <div className="cardImg">
                <img src={img} alt="card imagen" />
            </div>
            <div className="cardDetail">
                <h3>{title}</h3>
                <p>{gender}</p>
                <h4>${price}</h4>
            </div>
        </div>
    );
}

export default Item; 