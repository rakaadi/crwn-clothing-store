import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>
            {
                hidden ? null : <CartDropdown />
            }
            <div className="options">
                <CartIcon />
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser, hidden
})

export default connect(mapStateToProps)(Header);
