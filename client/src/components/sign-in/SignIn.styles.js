import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width: 800px) {
        width: 325px;
    }
`;

export const SignInTitle = styled.h2`
    margin: 10px 0;
`;

export const ButtonBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;