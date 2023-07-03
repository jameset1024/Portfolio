import * as React from "react";
import {graphql, HeadFC, Link} from "gatsby";
import Button from "@app/components/elements/button";
import './styles.scss';
import {AnimatePresence, motion} from "framer-motion";
import {SEO} from "@app/components/layout/head";

const WorkPage = ({data}) => {
  const projects = [...data.allWpPortfolio.nodes];
  const first = projects.length ? projects.splice(0,1)[0] : false;

  return (
    <div className={'work-page'}>
      <div className={'banner-wrap'} role={'banner'}>
        <div className={'banner-text'}>
          Work
        </div>
      </div>

      { first &&
          <div className={'leadWork'}>
              <div>
                { first.featuredImage.node.mediaItemUrl &&
                    <div className={'workImage'}>
                        <img src={first.featuredImage.node.mediaItemUrl} alt={first.featuredImage.node.altText} />
                    </div>
                }
              </div>
              <div>
                  <div className={'workInfo'}>
                      <div className={'workMeta'}>{first.acfPortfolio.projectType}</div>

                      <h1>{first.title}</h1>
                      <div className={'excerpt'} dangerouslySetInnerHTML={{__html: first.acfPortfolio.excerpt}} />

                      <Button src={`/work/${first.slug}`}>View Project</Button>
                  </div>
              </div>
          </div>
      }

      <div className={'wrapper'}>
        <div className={'workWrapper'}>
          <AnimatePresence>
            { projects.map((e, i) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    translateY: '100px'
                  }}
                  whileInView={{
                    opacity: 1,
                    translateY: 0,
                  }}
                  amount={'all'}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={'workItem'}
                  key={`workitem-${i}`}
                >
                  <div className={'workItemInner'}>
                    <div className={'workImage'}>
                      <img src={e.featuredImage.node.mediaItemUrl} alt={e.featuredImage.node.altText} />
                    </div>
                    <div className={'workInfo'}>
                      <div className={'workMeta'}>{e.acfPortfolio.projectType}</div>

                      <h2>{e.title}</h2>

                      <div className={'excerpt'}>{e.acfPortfolio.excerpt}</div>
                      <Button src={`/work/${e.slug}`}>View Project</Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;

export const Head: HeadFC = () => {
  return (
    <SEO>
      <title>Work | Erik James Thomas - Senior Software Engineer</title>
    </SEO>
  )
}

export const pageQuery = graphql`
  query MyQuery {
  allWpPortfolio(limit: 10, sort: {date: DESC}) {
    nodes {
      id
      title
      slug
      acfPortfolio {
        excerpt
        projectType
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
