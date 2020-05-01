import React, { useEffect } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import { Route, useRouteMatch } from "react-router-dom";
import Collection from "../collection/collection.component";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from "../../firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
// import { updateCollection } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { selectIsFetching } from "../../redux/shop/shop.selectors";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const ShopPage = () => {
  const match = useRouteMatch();
  const isLoading = useSelector(selectIsFetching);
  const dispatch = useDispatch();

  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // let unsuscribeFromSnapshot = null;
    // const collectionRef = firestore.collection("collections");
    // unsuscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   dispatch(updateCollection(collectionsMap));
    //   setIsLoading(false);
    // });

    // return unsuscribeFromSnapshot;
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionsOverviewWithSpinner isLoading={!isLoading} />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <CollectionWithSpinner isLoading={!isLoading} />
      </Route>
    </div>
  );
};

export default ShopPage;
