import React from 'react';
import "./Item.css";

function ItemDetail(props) {
  let { price, title, img, category } = props;

    return (
        <div className='item'>
            <div className="itemImg">
                <img src={img} alt="item imagen" />
            </div>
            <div className="itemDetail">
                <h3>{title}</h3>
                <p>{category}</p>
                <h4>${price}</h4>
            </div>
        </div>
    );
}

export default ItemDetail;