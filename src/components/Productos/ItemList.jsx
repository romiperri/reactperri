import React from 'react'
import Item from "./Item";

function ItemList(props) {
    return (
        <div className='containerCard'>
            {props.data.map((item) => {
                console.log(item);
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        title={item.title}
                        img={item.img}
                        genre={item.genre}
                    />
                );
            })}
        </div>
        )
}

export default ItemList;