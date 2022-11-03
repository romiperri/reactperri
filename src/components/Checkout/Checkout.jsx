import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createBuyOrder } from "../../dataBase/firestore";


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
        <div className="flex justify-center p-8">
            <div className="w-full max-w-xs h-screen check-container">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleCheckout}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username" htmlFor="name"> Nombre </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={dataForm.name}
                            onChange={inputChangeHandler}
                            name="name"
                            type="text"
                            placeholder="Nombre"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono"> Telefono </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={dataForm.phone}
                            onChange={inputChangeHandler}
                            name="phone"
                            type="text"
                            placeholder="Telefono"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> Email </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={dataForm.email}
                            onChange={inputChangeHandler}
                            name="email"
                            type="text"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <button className='bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-1 px-5 border border-orange-500 hover:border-transparent rounded' type="submit">Finalizar Compra</button>
                </form>
            </div>
        </div>
    );

}

export default Checkout