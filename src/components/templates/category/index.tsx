import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby";
import "./styles.sass";
import {monthDisplay} from "@app/helpers/date";
import {PostData} from "@app/helpers/post";
import Button from "@app/components/elements/button";
import {SEO} from "@app/components/layout/head";


const CategoryPage: React.FC<PageProps> = ({data, pageContext}) => {
  //@ts-ignore
  const posts = data.allWpPost.nodes;
  const first = posts.length ? PostData(posts.splice(0,1)[0]) : false;

  return (
    <section className={'categoryPage'}>
      <div className={'section-header-wrap'} role={'banner'}>
        <div className={'section-header-text'}>
          Articles
        </div>
      </div>

      {first &&
          <div className={'categoryLead'}>
              <div>
                  <div className={'leadInfo'}>
                      <h2>{first.title}</h2>
                      <div className={'post-meta'}>
                        {monthDisplay(new Date(first.date).getMonth())} {new Date(first.date).getDay()}, {new Date(first.date).getFullYear()}
                          | {
                        first.categories.length &&
                        first.categories.map( (e,i) => {
                          return <span className={'category'} key={`cat-${i}`}>{e.name}</span>
                        })
                      }
                      </div>
                      <div className={'excerpt'} dangerouslySetInnerHTML={{__html: `<p>${first.content}...</p>`}} />

                      <Button to={`${first.uri}`}>Read</Button>
                  </div>
              </div>
              <div>
                {first.thumbnail &&
                    <div className={'leadImage'}>
                        <img src={first.thumbnail.url} alt={first.thumbnail.alt} />
                    </div>
                }
              </div>
          </div>
      }

      <div className={'wrapper'}>
        <div className={'categoryGrid'}>
          {/* @ts-ignore */}
          { posts.map( (e, i: number) => {
            const data = PostData(e);

            return (
              <div className={'categoryGridItem'} key={`articles-${i}`}>
                <div className={'categoryInnerItem'}>
                  <div className={'categoryImage'}>
                    { data.thumbnail &&
                        <img src={data.thumbnail.url} alt={data.thumbnail.alt} />
                    }
                  </div>
                  <div className={'categoryInfo'}>
                    <h2>{e.title}</h2>
                    <div className={'post-meta'}>
                      {data.date}
                      | {
                      data.categories.length &&
                      data.categories.map( (e,i) => {
                        return <span className={'category'} key={`cat-${i}`}>{e.name}</span>
                      })}
                    </div>
                    <div className={'excerpt'} dangerouslySetInnerHTML={{__html: `<p>${data.content}...</p>`}} />

                    <Button to={`${data.uri}`}>Read</Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

  export default CategoryPage;

  export const Head: HeadFC = ({data, location, pageContext}) => {
    return (
      <SEO>
        {/* @ts-ignore */}
        <link rel={'canonical'} href={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
        {/* @ts-ignore */}
        <title>Blog Category {pageContext.name} | Erik James Thomas - Senior Software Engineer</title>
      </SEO>
    )
  }

  export const pageQuery = graphql`
  query MyQuery($slug: String!) {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {slug: {eq: $slug}}}}}
    sort: {date: DESC}
  ) {
    nodes {
      id
      title
      content
      excerpt
      uri
      date
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          id
          mediaItemUrl
          altText
        }
      }
    }
  }
  site {
    siteMetadata {
      siteUrl
    }
  }
}`;
