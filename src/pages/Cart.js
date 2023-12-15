import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../components/products";
import { CartItem } from "./Cart-Item";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";


export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <>
          <Navbar/>
          <Heading/>
        <div className="cart-section">
            <div className="cart-section-container">
                <h1 className="menu-section-heading">Your Cart Items</h1>

            </div>
            <div className="cart-product">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0){
                    return <CartItem data={product} />}

                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <h3> Subtotal: ${totalAmount} </h3>
                    <button className="btn-order" onClick={() => navigate("/menu")}> Continue Shopping </button>
                    <button className="btn-order-payment"
                        onClick={() => {
                            checkout();
                            navigate("/pay");
                        }}
                    >
                        {" "}
                        Pay{" "}

                    </button>

                </div>
            ) : (
                <h1> Your Shopping Cart is Empty</h1>
            )}
        </div>

            <Footer/>
        </>
    );
};
export default Cart;