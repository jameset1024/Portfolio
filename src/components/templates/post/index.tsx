import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './styles.scss';
import { graphql } from "gatsby";
import { monthDisplay } from "@app/helpers/date";

const PostPage: React.FC<PageProps> = ({data}) => {
  const date = new Date(data.wpPost.date);

  return (
    <article className={'wrapper articles'}>
      <header>
        {data.wpPost.featuredImage.node &&
        <img src={data.wpPost.featuredImage.node.mediaItemUrl} alt={data.wpPost.featuredImage.node.altText}/> }
      </header>

      <div className={'post-container'}>
        <h1>{data.wpPost.title}</h1>
        <div className={'post-meta'}>
          <span className={'post-date'}>{monthDisplay(date.getMonth())} {date.getDay()}, {date.getFullYear()}</span>
          <span className={'post-categories'}>{data.wpPost.categories.nodes.map((e,i) => {
            return <span className={'individual-categories'} key={`category-${i}`}>{e.name}</span>;
          })}</span>
        </div>
        <div className={'content'} dangerouslySetInnerHTML={{__html: data.wpPost.content}} />
      </div>
    </article>
  )
}

export default PostPage;

export const Head: HeadFC = () => <title>Blog Articles | Erik James Thomas - Senior Software Engineer</title>

export const postQuery = graphql`
  query PostById($id: String!) {
    wpPost(id: {eq: $id}) {
      id
      title
      content
      date
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
    }
  }
`
