import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const Product = (props) => {
    const { id, productName, price, productImage, productDescription } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];

    return (


        <div className="menu-section-card">
            <div className="menu-section-img">
            <img src={productImage} alt="Product Chain" />
        </div>
            <div className="menu-section-card-content">
                <div className="menu-price">
                    <div className="menu-section-title">{productName}</div>

                <div className="menu-price-title"> ${price}</div>
                </div>
            <div className="menu-section-description">{productDescription}</div>

            <div className="menu-order">
            <button className="btn-order" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                <img src="./images/cart.png" id="cart" alt="cart" width={30} height={30}/>
            </button>
            </div>
        </div>
        </div>



    );
};