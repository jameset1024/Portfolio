import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './styles.scss';
import { graphql } from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {AnimatePresence, motion} from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";

const images = ['image','imageTwo','imageThree','imageFour','imageFive'];
const PortfolioPage: React.FC<PageProps> = ({data}) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  const portImages = [];
  for ( const i of images ) {
    if ( data.wpPortfolio.acfPortfolio[i] ) {
      portImages.push(data.wpPortfolio.acfPortfolio[i]);
    }
  }

  return (
    <article className={'wrapper portfolioWrapper'}>
      <header>
        <h6>{data.wpPortfolio.acfPortfolio.projectType}</h6>
      </header>

      <div className={'portfolioHeader'}>
        <div>
          <div className={'headerWrap'}>
            <h1>{data.wpPortfolio.title}</h1>
          </div>

          {data.wpPortfolio.acfPortfolio.website &&
              <div className={'clientWebsite'}>
                  <a href={data.wpPortfolio.acfPortfolio.website} target={'_blank'}><FontAwesomeIcon icon={faGlobe} /> View Website</a>
              </div>
          }

          <div className={'portfolioMeta'}>
            <div className={'portfolioTech'}>
              <h4>Technology</h4>

              <div className={'tech'}>
                {data.wpPortfolio.portfolioTypes.nodes.map((e, i) => {
                  return <span key={`tech-${i}`}>{e.name}</span>
                })}
              </div>
            </div>
            <div className={'portfolioClient'}>
              <h4>Client</h4>

              <span className={'client'}>{data.wpPortfolio.acfPortfolio.client}</span>
            </div>
          </div>
        </div>
        <div>
          <div className={'content'} dangerouslySetInnerHTML={{__html: data.wpPortfolio.content}} />
        </div>
      </div>

      <div className={'portfolioImagesWrapper'}>
        <AnimatePresence>
          {portImages.map((e, i) => {
            let adjust = isSmallDevice ? 0 : -(4 * i);

            return (
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: '100px'
                }}
                whileInView={{
                  opacity: 1,
                  translateY: adjust + 'em',
                }}
                amount={'all'}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={'portfolioImage'}
                key={`portImages-${i}`}>
                <img src={e.mediaItemUrl} alt={e.altText} />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </article>
  )
}

export default PortfolioPage;

export const Head: HeadFC = () => <title>Blog Articles | Erik James Thomas - Senior Software Engineer</title>

export const postQuery = graphql`
  query PostById($id: String!) {
    wpPortfolio(id: {eq: $id}) {
      id
      title
      content
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
      acfPortfolio {
        excerpt
        projectType
        client
        website
        image {
          mediaItemUrl
          altText
        }
        imageTwo {
          mediaItemUrl
          altText
        }
        imageThree {
          mediaItemUrl
          altText
        }
        imageFour {
          mediaItemUrl
          altText
        }
        imageFive {
          mediaItemUrl
          altText
        }
      }
      portfolioTypes {
        nodes {
          name
        }
      }
    }
  }
`
