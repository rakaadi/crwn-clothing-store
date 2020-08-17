import styled from "styled-components";

export const MenuItemContainer = styled.div`
    height: ${({ size }) => (size ? "380px" : "240px")};
    min-width: 30%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #7777;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

        }

        & .content {
            opacity: 0.9;
        }
    }

    &.large {
        height: 380px;
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }
`;

export const BackgroundImageContainer = styled.div`
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #7777;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`;

export const ContentTitle = styled.span`
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 6px;
    color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;