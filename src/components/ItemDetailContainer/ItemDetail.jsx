import React from 'react'
import ItemD from './ItemD';

function ItemDetail() {
    return (
      <div className='containerCard'>
          {props.data((item) => {
              console.log(item);
              return (
                  <ItemD
                      key={item.id}
                      price={item.price}
                      title={item.title}
                      img={item.img}
                      gender={item.gender}
                  />
              );
          })}
      </div>
      )
}

export default ItemDetail