import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { useSelector } from "react-redux";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default Directory;
