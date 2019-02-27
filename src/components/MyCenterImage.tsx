import * as React from "react";

import MyImage, { MyImageProps } from "./MyImage";

const MyCenterImage = (props: MyImageProps) => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      margin: 0,
      padding: 0,
      width: "100%",
    }}
  >
    <MyImage {...props} />
  </div>
);

export default MyCenterImage;
