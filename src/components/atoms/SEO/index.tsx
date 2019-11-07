import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        titleTemplate
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

type result = {
  site: {
    siteMetadata: {
      defaultTitle;
      defaultDescription;
      titleTemplate;
      siteUrl;
      defaultImage;
      twitterUsername;
    };
  };
};

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: string;
};

const SEO: React.FC<SEOProps> = (props) => {
  const { title, description, image, pathname, article } = props;

  return (
    <StaticQuery
      query={query}
      render={({ site: { siteMetadata } }: result) => {
        const {
          defaultTitle,
          defaultDescription,
          titleTemplate,
          siteUrl,
          defaultImage,
          twitterUsername,
        } = siteMetadata;
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
        };

        return (
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        );
      }}
    />
  );
};

export default SEO;
