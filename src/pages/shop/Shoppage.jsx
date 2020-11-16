import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/CollectionOverview";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "../../redux/shop/shop.selector";
import CollectionPage from "../collection/Collection";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isCollectionFetching: selectIsCollectionFetching(state),
  isCollectionLoaded: selectIsCollectionLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
