import Navbar from "../components/Navbar";
import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

export default function ConfirmReservation(){
    return(
        <>
            <Navbar/>
            <Heading/>
        <section className="confirm">
            <h1>Table reserved!
            </h1>
            <div className="confirm-container">
                <h1>The Table Has Been Reserved Successuflly!</h1>
            <img src="./images/agree.png" alt="succsesfull"/>

        </div>
            <a href="/">
                <button className="btn-primary">
                Return to home</button>
            </a>

        </section>

        </>
    )
}