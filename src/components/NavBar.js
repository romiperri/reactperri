import './navBar.css';
import './CartWidget.jsx'
import CartWidget from './CartWidget.jsx';
import { Link } from "react-router-dom";

function NavBar() {
    return (

        <div className="navBar">
            <h1>Tienda de Libros</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/Romance">Romance</Link></li>
                <li><Link to="/category/Ficcion">Ficción</Link></li>
            </ul>
            <CartWidget />
        </div>

    );
}

export default NavBar; 