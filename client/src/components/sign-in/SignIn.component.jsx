import React, { useState } from "react";
import { connect } from "react-redux";

import { SignInContainer, SignInTitle, ButtonBarContainer } from "./SignIn.styles";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    handleChange={handleChange}
                    value={email}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    handleChange={handleChange}
                    value={password}
                    required
                />
                <ButtonBarContainer>
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign In With Google</CustomButton>
                </ButtonBarContainer>
            </form>
        </SignInContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
