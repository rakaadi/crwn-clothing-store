import React, { useState } from "react";
import { connect } from "react-redux";

import { SignUpContainer, SignUpTitle } from "./SignUp.styles";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = userCredentials;

        if (password !== confirmPassword) {
            alert("Password don't macth!")
            return;
        }

        signUpStart({ displayName, email, password });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    const { displayName, email, password, confirmPassword } = setUserCredentials;
    return (
        <SignUpContainer>
            <SignUpTitle>I don't have an account</SignUpTitle>
            <span>Sign Up With Your Email And Password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text"
                    name="displayName"
                    label="Name"
                    value={displayName}
                    onChange={handleChange}
                    required
                />
                <FormInput type="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput type="password"
                    name="password"
                    label="Password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <FormInput type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    )
};

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);