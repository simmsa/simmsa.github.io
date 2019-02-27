import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

interface Meta {
  property: string;
  content: string;
}

interface SEOMetadata {
  description?: string;
  lang?: string;
  meta?: Meta[];
  keywords?: string[];
  title: string;
}

const SEO = (props: SEOMetadata) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          props.description || data.site.siteMetadata.description;

        const keywords = props.keywords ? props.keywords.join(", ") : "";
        const otherMeta = props.meta;
        const additionalMeta: Meta[] = [];

        if (keywords.length > 0) {
          additionalMeta.concat({ property: "keywords", content: keywords });
        }

        if (otherMeta !== undefined && otherMeta.length > 0) {
          additionalMeta.concat(otherMeta);
        }

        return (
          <Helmet
            htmlAttributes={{
              lang: props.lang,
            }}
            title={props.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                content: metaDescription,
                name: `description`,
              },
              {
                content: props.title,
                property: `og:title`,
              },
              {
                content: metaDescription,
                property: `og:description`,
              },
              {
                content: `website`,
                property: `og:type`,
              },
              {
                content: `summary`,
                name: `twitter:card`,
              },
              {
                content: data.site.siteMetadata.author,
                name: `twitter:creator`,
              },
              {
                content: props.title,
                name: `twitter:title`,
              },
              {
                content: metaDescription,
                name: `twitter:description`,
              },
            ].concat(additionalMeta)}
          />
        );
      }}
    />
  );
};

export default SEO;
