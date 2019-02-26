import * as React from "react";

import { Link } from "gatsby";

import theme from "../theme";

interface HeaderProps {
  siteTitle: string;
}

const Header = (props: HeaderProps) => (
  <header
    style={{
      background: theme.brand_color,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {props.siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
