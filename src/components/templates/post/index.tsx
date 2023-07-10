import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './styles.scss';
import {graphql, Link} from "gatsby";
import { monthDisplay } from "@app/helpers/date";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";

const PostPage: React.FC<PageProps> = ({data}) => {
  const date = new Date(data.wpPost.date);

  return (
    <article className={'articles'}>
      <header>
        {data.wpPost.featuredImage.node &&
            <img src={data.wpPost.featuredImage.node.mediaItemUrl} alt={data.wpPost.featuredImage.node.altText}/> }
      </header>

      <div className={'wrapper'}>
        <div className={'post-container'}>
          <h1>{data.wpPost.title}</h1>
          <div className={'post-meta'}>
            <span className={'post-date'}>{monthDisplay(date.getMonth())} {date.getDay()}, {date.getFullYear()}</span>
            <span className={'post-categories'}>{data.wpPost.categories.nodes.map((e,i) => {
              return <Link to={`/category/${e.slug}`} key={`category-${i}`}><span className={'individual-categories'}>{e.name}</span></Link>;
            })}</span>
          </div>
          <div className={'content'} dangerouslySetInnerHTML={{__html: data.wpPost.content}} />
        </div>
      </div>

      <div className={'sharePost'}>
        <span>Share:</span>

        <div className={'icon'}>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://${window.location.hostname}${data.wpPost.uri}`} target={'_blank'}>
            <FontAwesomeIcon icon={faLinkedinIn} color={'#000'} size={'lg'} />
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=https://${window.location.hostname}${data.wpPost.uri}`} target={'_blank'}>
            <FontAwesomeIcon icon={faFacebookF} color={'#000'} size={'lg'} />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=https://${window.location.hostname}${data.wpPost.uri}&text=Check%20this%20new%20post%20from%20Erik%20Thomas`} target={'_blank'}>
            <FontAwesomeIcon icon={faTwitter} color={'#000'} size={'lg'} />
          </a>
          <a href={`http://pinterest.com/pin/create/button/?url=https://${window.location.hostname}${data.wpPost.uri}&media=${data.wpPost.featuredImage.node.mediaItemUrl}&description=Check%20this%20new%20post%20from%20Erik%20Thomas`} target={'_blank'}>
            <FontAwesomeIcon icon={faPinterest} color={'#000'} size={'lg'} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default PostPage;

export const Head: HeadFC = ({ data }) => <title>{data.wpPost.title} | Erik James Thomas - Senior Software Engineer</title>

export const postQuery = graphql`
  query PostById($id: String!) {
    wpPost(id: {eq: $id}) {
      id
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
  }
`
