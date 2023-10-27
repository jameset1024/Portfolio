import React, {useContext} from "react";
import {graphql, useStaticQuery} from "gatsby";
import { useLocation } from "@reach/router"
import {ThemeContext} from "@app/layouts";

type SEO = {
  children: React.ReactNode
}

export const SEO = ({children}: SEO) => {
  const location = useLocation();
  const theme = useContext(ThemeContext);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: defaultTitle,
    description: defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${location.pathname}`,
  };

  return (
    <>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="description" content="A software engineer residing in Charlotte, NC sharing my experiences and knowledge with the world." />

      {children}
    </>
  );
}
