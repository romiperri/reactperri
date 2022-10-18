import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './navBar.css';
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
    const { getItemCount } = useContext(cartContext)

    return (
        <div>
            <Link to={"/cart"}>
                <button className="cart-shop">
                    <FontAwesomeIcon className="Cart" icon={faCartShopping} />
                    <span className="count">{getItemCount()}</span>
                </button>
            </Link>
        </div>
    )
}

export default CartWidget 