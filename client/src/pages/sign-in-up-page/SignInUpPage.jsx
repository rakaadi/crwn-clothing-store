import React from "react";

import { SignInAndSignUpContainer } from "./SignInUpPage.styles";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";

const SignInUpPage = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>

    )
}

export default SignInUpPage;