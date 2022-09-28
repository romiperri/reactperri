import React from 'react'

function ItemD(props) {
    let { price, title, img, gender } = props;


    return (
        <div className='ItemD'>
            <div className="Img">
                <img src={img} alt="imagen" />
            </div>
            <div className="cardDetail">
                <h3>{title}</h3>
                <p>{gender}</p>
                <h4>${price}</h4>
            </div>
        </div>)
}

export default ItemD