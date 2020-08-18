import React, { Component } from "react";
import { connect } from "react-redux";

import { SignUpContainer, SignUpTitle } from "./SignUp.styles";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't macth!")
            return;
        }

        signUpStart({ displayName, email, password });
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I don't have an account</SignUpTitle>
                <span>Sign Up With Your Email And Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text"
                        name="displayName"
                        label="Name"
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput type="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);