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

function SEO(metadata: SEOMetadata) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          metadata.description || data.site.siteMetadata.description;

        const keywords = metadata.keywords ? metadata.keywords.join(", ") : "";
        const otherMeta = metadata.meta;
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
              lang: metadata.lang,
            }}
            title={metadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                content: metaDescription,
                name: `description`,
              },
              {
                content: metadata.title,
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
                content: metadata.title,
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
}

export default SEO;
