import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class Payment extends React.Component {
    onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`We are in business, ${data.email}`);
            });
        });
    }

    // ...

    render() {
        return (
            <>
                <Navbar/>

            <div className="payment-section">

            <StripeCheckout
                token={this.onToken}
                stripeKey="my_PUBLISHABLE_stripekey"
            />
            </div>
                <Footer/>

    </>
        )
    }
}
