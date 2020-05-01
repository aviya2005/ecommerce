import React from "react";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
const Collection = () => {
  const { collectionId } = useParams();
  const collection = useSelector(state =>
    selectCollection(collectionId)(state)
  );
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
