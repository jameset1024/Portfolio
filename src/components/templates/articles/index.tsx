import React from "react";
import {PostData} from "@app/helpers/post";
import {monthDisplay} from "@app/helpers/date";
import {graphql, HeadFC, Link, PageProps} from "gatsby";
import Button from "@app/components/elements/button";
import {AnimatePresence, motion} from "framer-motion";
import Pagination from "@app/components/elements/pagination";
import "./styles.sass";
import {SEO} from "@app/components/layout/head";

const Article: React.FC<PageProps> = ({ data, pageContext }) => {
  // @ts-ignore
  const posts = [...data.allWpPost.nodes];
  const first = posts.length ? PostData(posts.splice(0,1)[0]) : false;

  return (
    <section className={'blogPage'}>
      <div className={'section-header-wrap'} role={'banner'}>
        <div className={'section-header-text'}>
          Articles
        </div>
      </div>

      {first &&
          <div className={'blogLead'}>
              <div>
                  <div className={'leadInfo'}>
                      <h1><Link to={`${first.uri}`}>{first.title}</Link></h1>
                      <div className={'post-meta'}>
                        {monthDisplay(new Date(first.date).getMonth())} {new Date(first.date).getDay()}, {new Date(first.date).getFullYear()}
                        {
                          first.categories.length &&
                          first.categories.map( (e,i) => {
                            // @ts-ignore
                            return <Link to={`/category/${e.slug}`} key={`cat-${i}`}><span className={'category'}>{e.name}</span></Link>
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
        <div className={'blogGrid'}>
          <AnimatePresence>
            { posts.map( (e, i) => {
              const data = PostData(e);

              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    translateY: '100px',
                  }}
                  whileInView={{
                    opacity: 1,
                    translateY: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={'blogGridItem'}
                  key={`articles-${i}`}>
                  <div className={'blogInnerItem'}>
                    <div className={'blogImage'}>
                      { data.thumbnail &&
                          <img src={data.thumbnail.url} alt={data.thumbnail.alt} />
                      }
                    </div>
                    <div className={'blogInfo'}>
                      <h2><Link to={`${data.uri}`}>{e.title}</Link></h2>
                      <div className={'post-meta'}>
                        {data.date}
                        {
                          data.categories.length &&
                          data.categories.map( (e,i) => {
                            // @ts-ignore
                            return <Link to={`/category/${e.slug}`} key={`posts-cat-${i}`}><span className={'category'}>{e.name}</span></Link>
                          })}
                      </div>
                      <div className={'excerpt'} dangerouslySetInnerHTML={{__html: `<p>${data.content}...</p>`}} />

                      <Button to={`${data.uri}`}>Read</Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* @ts-ignore */}
          {pageContext.pageCount > 1 && <Pagination currentPage={pageContext.currentPage} totalPages={pageContext.pageCount} /> }
        </div>
      </div>
    </section>
  )
}

  export default Article;

  export const Head: HeadFC = ({data, location}) => {
    return (
      <SEO>
        {/* @ts-ignore */}
        <link rel={'canonical'} href={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
        <title>Articles | Erik James Thomas - Senior Software Engineer</title>
      </SEO>
    )
  }

  export const pageQuery = graphql`
  query MyQuery($skip: Int!, $limit: Int!) {
  allWpPost(
      sort: { date: DESC }
      limit: $limit
      skip: $skip) {
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
          slug
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
