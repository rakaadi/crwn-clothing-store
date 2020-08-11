import React from "react";

import { CartItemContainer, ItemDetailsContainer } from "./CartItem.styles";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <span className="name">{name}</span>
                <span className="name">{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;
