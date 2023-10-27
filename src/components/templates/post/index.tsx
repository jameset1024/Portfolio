import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './styles.sass';
import { graphql, Link } from "gatsby";
import { monthDisplay } from "@app/helpers/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { SEO } from "@app/components/layout/head";
import Prism from 'prismjs';
import "prismjs/themes/prism.css";
import { MouseEvent, useEffect, useState } from "react";

const reactLocalStorageKey = 'etreact_ids';

const PostPage: React.FC<PageProps> = ({data}) => {
  const [allow, setAllow] = useState<boolean>(true);
  const [action, setAction] = useState<boolean>(false);
  // @ts-ignore
  const date = new Date(data.wpPost.date);

  useEffect(() => {
    Prism.highlightAll();

    let ids = window.localStorage.getItem(reactLocalStorageKey);
    if ( ids ) {
      ids = JSON.parse(ids);

      // @ts-ignore
      if ( Object.keys(ids).indexOf(data.wpPost.id) !== -1 ) {
        setAllow(false);
        // @ts-ignore
        setAction(ids[data.wpPost.id]);
      }
    }

  }, []);

  const reactToPost = async (e: MouseEvent<HTMLDivElement>, action: boolean) => {
    if ( !allow ) return;
    e.currentTarget.classList.add('active');

    try {
      // @ts-ignore
      const response = await fetch(`${process.env.GATSBY_REST_API}/wp-json/portfolio/v1/reacts/${data.wpPost.databaseId}`, {
        method: 'POST',
        body: JSON.stringify({action}),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${process.env.GATSBY_REST_USERNAME}:${process.env.GATSBY_REST_PASSWORD}`)}`
        }
      });

      await response.json();

      // Gets the locally stored data
      const currentIds = window.localStorage.getItem(reactLocalStorageKey);
      let current: {[id: string]: boolean} = {};
      if ( currentIds ) {
        // @ts-ignore
        current = JSON.stringify(currentIds) as {[id: string]: boolean};
      } else {
        // @ts-ignore
        current[data.wpPost.id] = action;
      }

      // Sets data if needed
      // @ts-ignore
      if ( currentIds && current ) current[data.wpPost.id] = action;

      // Overwrites the old data
      window.localStorage.setItem(reactLocalStorageKey, JSON.stringify(current));
      setAllow(false);
      setAction(action);
    } catch (e) {
      console.error((e as Error).message);
    }
  }

  return (
    <>
      {/* @ts-ignore */}
      <header className={'post-header'}>
        <div style={{backgroundImage: `url(${data.wpPost.featuredImage.node.mediaItemUrl})`}} />
      </header>
      <div className={'article-container'}>
        <aside>
          <div className={'postInteractions'}>
            <div className={'postReact'}>
              <div className={'reactHold'}>
                <div className={'reactWrap thumbs-up ' + (!allow ? 'disable' : '') + (!allow && action ? ' active' : '')} onClick={async (e) => await reactToPost(e, true)}>
                  <FontAwesomeIcon icon={faThumbsUp} size={'lg'} />
                </div>
              </div>
              <div className={'reactHold'}>
                <div className={'reactWrap thumbs-down '  + (!allow ? 'disable' : '') + (!allow && !action ? ' active' : '')} onClick={async (e) => await reactToPost(e, false)}>
                  <FontAwesomeIcon icon={faThumbsDown} size={'lg'} fixedWidth={true}/>
                </div>
              </div>
            </div>
            <div className={'sharePost'}>
              <span>Share:</span>

              <div className={'icon'}>
                {/* @ts-ignore */}
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${data.site.siteMetadata.siteUrl}${data.wpPost.uri}`} target={'_blank'}>
                  <FontAwesomeIcon icon={faLinkedinIn} color={'#000'} size={'lg'} />
                </a>
                {/* @ts-ignore */}
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${data.site.siteMetadata.siteUrl}${data.wpPost.uri}`} target={'_blank'}>
                  <FontAwesomeIcon icon={faFacebookF} color={'#000'} size={'lg'} />
                </a>
                {/* @ts-ignore */}
                <a href={`https://twitter.com/intent/tweet?url=${data.site.siteMetadata.siteUrl}${data.wpPost.uri}&text=Check%20this%20new%20post%20from%20Erik%20Thomas`} target={'_blank'}>
                  <FontAwesomeIcon icon={faTwitter} color={'#000'} size={'lg'} />
                </a>
                {/* @ts-ignore */}
                <a href={`http://pinterest.com/pin/create/button/?url=${data.site.siteMetadata.siteUrl}${data.wpPost.uri}&media=${data.wpPost.featuredImage.node.mediaItemUrl}&description=Check%20this%20new%20post%20from%20Erik%20Thomas`} target={'_blank'}>
                  <FontAwesomeIcon icon={faPinterest} color={'#000'} size={'lg'} />
                </a>
              </div>
            </div>
          </div>
        </aside>
        <article className={'article'}>
          <div className={'wrapper'}>
            <div className={'post-container'}>
              {/* @ts-ignore */}
              <h1>{data.wpPost.title}</h1>
              <div className={'post-meta'}>
                <span className={'post-date'}>{monthDisplay(date.getMonth())} {date.getDay()}, {date.getFullYear()}</span>
                {/* @ts-ignore */}
                <span className={'post-categories'}>{data.wpPost.categories.nodes.map((e,i) => {
                  return <Link to={`/category/${e.slug}`} key={`category-${i}`}><span className={'individual-categories'}>{e.name}</span></Link>;
                })}</span>
              </div>
              {/* @ts-ignore */}
              <div className={'content'} dangerouslySetInnerHTML={{__html: data.wpPost.content}} />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default PostPage;

export const Head: HeadFC = ({ data, location }) => {
  return (
    <SEO>
      {/* @ts-ignore */}
      <link rel={'canonical'} href={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
      {/* @ts-ignore */}
      <title>{data.wpPost.title} | Erik James Thomas - Senior Software Engineer</title>
    </SEO>
  )
}

export const postQuery = graphql`
  query PostById($id: String!) {
    wpPost(id: {eq: $id}) {
      id
      databaseId
      title
      content
      date
      uri
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
