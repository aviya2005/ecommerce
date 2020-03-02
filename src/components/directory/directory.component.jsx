import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import sectionsArr from "./directory.data";

export default function Directory() {
  // eslint-disable-next-line
  const [sections, setSections] = useState(sectionsArr);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
}
