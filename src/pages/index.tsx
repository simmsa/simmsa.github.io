import { Link } from "gatsby";
import * as React from "react";

import Image from "../components/Image";
import Layout from "../components/Layout";
import MyCenterImage from "../components/MyCenterImage";

import Me from "../images/Andrew-Simms.jpg";

const unitize = (input: number, unit: string): string => {
  return input.toString() + unit;
};

const indexFontSize = 2.25;

const indexStyle: React.CSSProperties = {
  fontSize: unitize(indexFontSize, "em"),
  lineHeight: unitize(indexFontSize / 2, "em"),
};

const headerStyle: React.CSSProperties = {
  fontSize: unitize(indexFontSize + 1, "em"),
  lineHeight: unitize(indexFontSize / 2, "em"),
};

interface DescriptionProps {
  children: React.ReactNode;
}

const Description = (props: DescriptionProps) => (
  <h3 style={{ ...indexStyle }}>{props.children}</h3>
);

const IndexPage = () => (
  <Layout>
    <h1 style={{ ...headerStyle, width: "100%", textAlign: "center" }}>
      Hello, I'm Andrew.
    </h1>
    <MyCenterImage path={Me} />
    <Description>
      I am a programmer, photographer, guitar player, and maker currently living
      in Golden, Colorado.
    </Description>
    <p>No go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
