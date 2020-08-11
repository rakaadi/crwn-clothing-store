import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverview.container";
import CollectionPageContainer from "../collection/Collection.container";
import { fetchCollectionsStartSync } from "../../redux/shop/shop.actions";

class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionsStartSync } = this.props;
        fetchCollectionsStartSync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartSync: () => dispatch(fetchCollectionsStartSync())
});

export default connect(null, mapDispatchToProps)(ShopPage);