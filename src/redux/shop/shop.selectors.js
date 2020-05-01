import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections
      ? Object.keys(collections).map(collection => collections[collection])
      : []
);

export const selectCollection = urlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[urlParam] : null)
  );
export const selectIsFetching = createSelector(
  [selectShop],
  shop => !!shop.collections
);
