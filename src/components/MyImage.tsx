import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export interface MyImageProps {
  path: any;
  altText?: string;
}

const MyImage = (props: MyImageProps) => (
  <img
    src={props.path}
    alt={props.altText || ""}
    style={{ maxWidth: "200px", margin: 0, padding: 0 }}
  />
);
export default MyImage;
