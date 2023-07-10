import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby";
import "./styles.scss";
import {monthDisplay} from "@app/helpers/date";
import {PostData} from "@app/helpers/post";
import Button from "@app/components/elements/button";

const CategoryPage: React.FC<PageProps> = ({data, pageContext}) => {
  const posts = data.allWpPost.nodes;
  const first = posts.length ? PostData(posts.splice(0,1)[0]) : false;

  return (
    <section className={'categoryPage'}>
      <div className={'banner-wrap'} role={'banner'}>
        <div className={'banner-text'}>
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

                      <Button src={`${first.uri}`}>Read</Button>
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
          { posts.map( (e, i) => {
            const data = PostData(e);

            return (
              <div className={'categoryGridItem'} key={`articles-${i}`}>
                <div className={'categoryInnerItem'}>
                  <div className={'categoryImage'}>
                    { data.thumbnail &&
                        <img src={data.thumbnail.url} alt={data.thumbnail.alt} />
                    }
                  </div>
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

                  <Button src={`${data.uri}`}>Read</Button>
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

export const Head: HeadFC = () => <title>Blog Articles | Erik James Thomas - Senior Software Engineer</title>

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
}`;
