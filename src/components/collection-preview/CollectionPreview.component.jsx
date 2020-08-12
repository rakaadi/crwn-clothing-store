import React from "react";

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./CollectionPreview.styles";
import CollectionItem from "../collection-item/CollectionItem.component";

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
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

export default CollectionPreview;