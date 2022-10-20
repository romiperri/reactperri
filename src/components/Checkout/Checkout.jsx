import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createBuyOrder} from "../../dataBase/firestore";
import "./Checkout.css";


function Checkout() {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const navigate = useNavigate();
    const context = useContext(cartContext);
    const { cart, getItemPrice } = context;


    function handleCheckout(event) {
        event.preventDefault();

        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getItemPrice(),
        };
        createBuyOrder(orderData).then((orderid) => {
            navigate(`/form/${orderid}`);
        });
    }

    function inputChangeHandler(event) {
        let inputName = event.target.name;
        let value = event.target.value;

        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }

    return (
        <div className="check-container">
            <form onSubmit={handleCheckout}>
                <div className="check-item">
                    <label htmlFor="name"> Nombre </label>
                    <input
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                </div>

                <div className="check-item">
                    <label htmlFor="telefono"> Telefono </label>
                    <input
                        value={dataForm.phone}
                        onChange={inputChangeHandler}
                        name="phone"
                        type="text"
                        placeholder="Telefono"
                        required
                    />
                </div>

                <div className="check-item">
                    <label htmlFor="email"> Email </label>
                    <input
                        value={dataForm.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="Correo"
                        required
                    />
                </div>
                <button className="btn-checkout" type="submit">Finalizar Compra</button>
            </form>
        </div>
    );

}

export default Checkout