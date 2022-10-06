import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './navBar.css';
import { useContext } from "react";
import { cartContext } from "../context/cartContext";


function CartWidget() {
    const { getItemCount } = useContext(cartContext)
    
    return (
        
        <FontAwesomeIcon className="Cart" icon={faCartShopping} />

    )
}

export default CartWidget 