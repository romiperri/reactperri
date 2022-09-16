import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './navBar.css';

function CartWidget() {
    return (
        <FontAwesomeIcon className="Cart" icon={faCartShopping} />
    )
}

export default CartWidget 