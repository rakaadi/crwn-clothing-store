import React from "react";
import { withRouter } from "react-router-dom";

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./CollectionPreview.styles";
import CollectionItem from "../collection-item/CollectionItem.component";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
                {title.toUpperCase()}
            </TitleContainer>
            <PreviewContainer>
                {
                    items
                        .slice(0, 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />)

                        )
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
}

export default withRouter(CollectionPreview);