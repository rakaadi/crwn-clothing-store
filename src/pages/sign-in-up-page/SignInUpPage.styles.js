import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
    margin: 0 auto;
    max-width: 850px;
    width: 90vw;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: unset;
        align-items: center;

        > *:first-child {
            margin-bottom: 50px;
        }
    }
`;