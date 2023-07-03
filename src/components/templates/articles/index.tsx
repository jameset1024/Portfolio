import React from "react";
import {PostData} from "@app/helpers/post";
import {monthDisplay} from "@app/helpers/date";
import {graphql, HeadFC, Link, PageProps} from "gatsby";
import Button from "@app/components/elements/button";
import {AnimatePresence, motion} from "framer-motion";
import Pagination from "@app/components/elements/pagination";
import "./styles.scss";
import {SEO} from "@app/components/layout/head";

const Article: React.FC<PageProps> = ({ data, pageContext }) => {
  const posts = [...data.allWpPost.nodes];
  const first = posts.length ? PostData(posts.splice(0,1)[0]) : false;

  return (
    <section className={'blogPage'}>
      <div className={'banner-wrap'} role={'banner'}>
        <div className={'banner-text'}>
          Articles
        </div>
      </div>

      {first &&
          <div className={'blogLead'}>
              <div>
                  <div className={'leadInfo'}>
                      <h1>{first.title}</h1>
                      <div className={'post-meta'}>
                        {monthDisplay(new Date(first.date).getMonth())} {new Date(first.date).getDay()}, {new Date(first.date).getFullYear()}
                          | {
                        first.categories.length &&
                        first.categories.map( (e,i) => {
                          return <Link to={`/category/${e.slug}`}><span className={'category'} key={`cat-${i}`}>{e.name}</span></Link>
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
                  amount={'all'}
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
                    <h2>{e.title}</h2>
                    <div className={'post-meta'}>
                      {data.date}
                      | {
                      data.categories.length &&
                      data.categories.map( (e,i) => {
                        return <Link to={`/category/${e.slug}`}><span className={'category'} key={`cat-${i}`}>{e.name}</span></Link>
                      })}
                    </div>
                    <div className={'excerpt'} dangerouslySetInnerHTML={{__html: `<p>${data.content}...</p>`}} />

                    <Button src={`${data.uri}`}>Read</Button>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {pageContext.pageCount > 1 &&
              <Pagination currentPage={pageContext.currentPage} totalPages={pageContext.pageCount} />
          }
        </div>
      </div>
    </section>
  )
}

export default Article;

export const Head: HeadFC = () => {
  return (
    <SEO>
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
}`;
