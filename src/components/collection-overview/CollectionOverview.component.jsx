import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionOverviewContainer } from "./CollectionOverview.styles";
import CollectionPreview from "../collection-preview/CollectionPreview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => {
    return (
        <CollectionOverviewContainer>
            {
                collections.map(
                    ({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                )
            }
        </CollectionOverviewContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
