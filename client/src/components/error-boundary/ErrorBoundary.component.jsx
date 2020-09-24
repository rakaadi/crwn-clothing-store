import React, { Component } from "react";

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from "./ErrorBoundary.styles";

class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            isError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Process the error
        return { isError: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.isError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/DWO5Hzg.png" />
                    <ErrorImageText>
                        There is something does not seems to be right here. We wonder what is it...
                    </ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;