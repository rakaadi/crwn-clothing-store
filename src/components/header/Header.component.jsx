import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
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

export default Header;