import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {graphql, Link} from "gatsby";
import "./styles.scss";
import {monthDisplay} from "@app/helpers/date";

const BlogPage: React.FC<PageProps> = ({data}) => {
  return (
    <section className={'wrapper'}>
      <header className={'blogHeader'}>
        <h1></h1>
      </header>

      <div className={'blogGrid'}>
        { data.allWpPost.nodes.map( (e, i) => {
          const { excerpt } = e;
          let intro = excerpt.match(/<[a-z]>(.*?)<\/[a-z]>/);
          intro = intro[1];

          const content = intro.split(' ').filter( (e, i) => i < 25 ).join(' ');

          const date = new Date(e.date);

          return (
            <div className={'blogGridItem'} key={`articles-${i}`}>
              <div className={'blogInnerItem'}>
                <div className={'blogImage'}>
                  { e.featuredImage &&
                    <img src={e.featuredImage.node.mediaItemUrl} alt={e.featuredImage.node.altText} />
                  }
                </div>
                <h2>{e.title}</h2>
                <div className={'post-meta'}>{monthDisplay(date.getMonth())} {date.getDay()}, {date.getFullYear()}</div>
                <div className={'excerpt'} dangerouslySetInnerHTML={{__html: `<p>${content}...</p>`}} />

                <Link to={`${e.uri}`} className={'blogBtn'}>Read</Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Blog Articles | Erik James Thomas - Senior Software Engineer</title>

export const pageQuery = graphql`
  query MyQuery {
  allWpPost(sort: {date: DESC}) {
    nodes {
      id
      title
      content
      excerpt
      uri
      date
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
