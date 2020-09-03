import styled from "styled-components";

export const CartDropdownContainer = styled.div`
    position: absolute;
	margin-right: 268px;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 0;
    z-index: 5;

    button {
        margin-top: auto;
    }

    @media screen and (max-width: 800px) {
        margin-right: 17px;
    }
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;