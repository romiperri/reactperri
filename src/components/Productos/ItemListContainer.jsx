import ItemCount from '../ItemCount/ItemCount';
import './Items.css'

function ItemListContainer() {
    return (
        <div>
            <h2>Productos de la tienda</h2>
            <div className='contador'>
                <ItemCount initial={1} stock={5} />
                <ItemCount initial={1} stock={2} />
                <ItemCount initial={1} stock={10} />
            </div>
        </div>
    );
}

export default ItemListContainer; 