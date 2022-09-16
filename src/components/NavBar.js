import './navBar.css';
import './CartWidget.jsx'
import CartWidget from './CartWidget.jsx';

function NavBar() {
    return (

        <div className="navBar">
            <h1>Tienda Eco</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>  
            <CartWidget/> 
        </div>

    );
}

export default NavBar; 