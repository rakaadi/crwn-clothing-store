import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51H8KFHGbiQa28TtsoFmTH76eQeLPmotNVYT83Kbh1Wz4n80gXdaZD14E3cJiBKeFnjFLq51tThitH6g6gnJ1SYPP00mGg3qL97";

    const onToken = token => {
        axios({
            url: "payment",
            method: "POST",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment Succesful!");
        }).catch(error => {
            console.log("Payment Error: ", error);
            alert("There was an issue with your payment. Please use the provided credit card.");
        })
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Total price is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
