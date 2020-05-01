import React from "react";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.action";
import { useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`${price}$`}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
