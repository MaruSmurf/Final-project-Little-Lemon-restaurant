import Navbar from "../components/Navbar";
import React from "react";
import { ShopContext } from "../context/shop-context";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer"
import {PRODUCTS} from '../components/products'
import { Product } from "./MenuProduct";
import { Link } from "react-router-dom";
export const MenuPage= () => {
        return(
     <>
           <Navbar/>
           <HeroSection/>
         <div  className="menu-section">
               <div className="menu-specials-container">
                   <h1 className="menu-section-heading">ORDER FOR DELIVERY!</h1>
               </div>
               <div className="menu-section-container">
                   {PRODUCTS.map((product) => (
                       <Product data={product} />
                   ))}

                   <div className="logo-cart">
                       <Link to="/cart">
                           <img src="./images/cart.png" alt="cart" />
                       </Link>
                   </div>

           </div>
         </div>
         <Footer/>
     </>
             )}

export default MenuPage