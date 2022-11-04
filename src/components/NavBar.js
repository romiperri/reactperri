import './navBar.css';
import './CartWidget.jsx'
import CartWidget from './CartWidget.jsx';
import { Link } from "react-router-dom";
import Logo from "./logo.png";

function NavBar() {
    return (

        <div className="navBar">
            <div>
                <img src={Logo} alt="logo" width='130' />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/Romance">Romance</Link></li>
                <li><Link to="/category/Ficcion">Ficción</Link></li>
                <li><Link to="/category/Autoayuda">Autoayuda</Link></li>

            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar; 