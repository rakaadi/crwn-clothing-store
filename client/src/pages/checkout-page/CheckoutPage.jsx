import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, TotalContainer, WarningContainer } from "./CheckoutPage.styles";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import StripeCheckoutButton from "../../components/stripe-button/StripeCheckoutButton.component";

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <TotalContainer>
                TOTAL:${total}
            </TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Expired: 01/21 - CVV: 123
            </WarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
