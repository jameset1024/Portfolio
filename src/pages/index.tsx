import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './styles.scss';
import {useEffect, useRef, useState} from "react";
import {graphql, Link} from "gatsby";
import Button from "@app/components/elements/button";
import {SEO} from "@app/components/layout/head";
import {Experience} from "@app/data/experience";

const IndexPage: React.FC<PageProps> = ({data}) => {
  const [active, setActive] = useState<boolean>(true);
  const labelRef = useRef(null);
  const labels = ['Nerd', 'Basketball\u00A0Fan', 'Movie\u00A0Lover', 'Anime\u00A0Fan', 'Video\u00A0Gamer', 'Foodie', 'Software\u00A0Engineer'];
  const project = data.allWpPortfolio.nodes[0];
  const job = Experience[0];
  let dropInterval, dropTimeout;

  useEffect(() => {
    headerLabelType();

    return () => {
      setActive(false);
      clearInterval(dropInterval);
      clearTimeout(dropTimeout);
    }
  });

  /**
   * Displays and removes text in a typewriter style
   */
  const headerLabelType = () => {
    async function run() {
      let key = 0;

      await new Promise((resolve) => setTimeout(() => resolve(), 3000));

      do {
        await remove();
        const word = labels[key].split('');

        labelRef.current.innerText = '';
        for( let o = 0; o < word.length; o++ ) {
          await new Promise((resolve) => {
            dropTimeout = setTimeout(() => {
              labelRef.current.innerText += word[o];
              resolve();
            },125);
          });
        }

        key = key === (labels.length - 1) ? 0 : (key + 1);

        await new Promise((resolve) => setTimeout(() => resolve(), 3000));
      } while (active);
    }

    run().catch( e => console.log(e.message));
  };

  /**
   * Handles removing the current visible text
   */
  const remove = async () => {
    const word = labelRef.current.innerText;
    await new Promise(async (resolve) => {
      const drop = word.split('');

      dropInterval = setInterval(() => {
        drop.pop();
        labelRef.current.innerText = drop.join('');

        if ( ! drop.length ) {
          resolve();
          clearInterval(dropInterval);
        }
      }, 125);
    });
  }

  return (
    <div className={'homePage'}>
      <header>
        <div className={'wrapper'}>
          <div className={'headerWrapper'}>
            <div className={'home-intro'}>Hello There,</div>
            <h1>My Name Is <span>Erik Thomas</span></h1>
            <h3>I am a <span ref={labelRef}>Software Engineer</span></h3>

            <p>I'm a full-stack engineer currently managing full cycle development and AWS infrastructure for clients at <Link to={'https://nearbycreative.com'} target={'_blank'}>Nearby Creative</Link>. If you have a project or just something interesting please reach out.</p>

            <Button src={'/contact'}>Contact Me</Button>
          </div>
        </div>
      </header>

      {/* My work section */}
      <section className={'myWork'}>
        <div className={'wrapper'}>
          <div className={'workGrid'}>
            <div>
              <h2>My Work</h2>
              <p>Over the years I've worked on many different projects across many different platforms using many different languages. Projects have ranged from simple WP sites to large MedTech and FinTech applications as well some infrastructure work.</p>

              <Button src={'/work'}>View All Projects</Button>
            </div>

            { project &&
                <div>
                    <h3>Recent Project</h3>

                    <div className={'homeWorkInner'}>
                        <div className={'homeWorkImage'}>
                            <img src={project.featuredImage.node.mediaItemUrl} alt={project.featuredImage.node.altText} />
                        </div>
                        <div className={'homeWorkInfo'}>
                            <div className={'homeWorkMeta'}>{project.acfPortfolio.projectType}</div>

                            <h2>{project.title}</h2>

                            <Button src={`/work/${project.slug}`}>View Project</Button>
                        </div>
                    </div>
                </div>
            }
          </div>
        </div>
      </section>

      {/* My position section */}
      <section className={'homeCurrentPosition'}>
        <div>
          <div className={'chatWithMe'}>
            <h3>Want to work with me?</h3>
            <p>I'm always open to new and interesting projects. If you have something that you and your company need help with reach out and let's talk.</p>
            <Button src={'/contact'}>Let's Chat</Button>
          </div>
        </div>
        <div>
          <div className={'currentlyUpTo'}>
            <h3>What I'm currently up to</h3>

            <div className={'currentPosition'}>
              <span><strong>Position:</strong> {job.position}</span>
              <span><strong>Company:</strong> {job.title}</span>
              <span><strong>Dates:</strong> {job.date}</span>
              <p>{job.currentDescription}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = ({location, data}) => {
  console.log(data);
  return (
    <SEO>
      <link rel={'canonical'} href={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
      <title>Erik James Thomas - Senior Software Engineer</title>
    </SEO>
  )
}


export const pageQuery = graphql`
  query MyQuery {
  allWpPortfolio(limit: 1, sort: {date: DESC}) {
    nodes {
      id
      title
      slug
      acfPortfolio {
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
  site {
    siteMetadata {
      siteUrl
    }
  }
}`;
