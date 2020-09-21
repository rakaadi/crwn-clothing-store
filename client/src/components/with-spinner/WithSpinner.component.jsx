import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";

const WithSpinner = WrappedComponent => {
    const spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
                <WrappedComponent {...otherProps} />
            )
    }
    return spinner;
};

export default WithSpinner;