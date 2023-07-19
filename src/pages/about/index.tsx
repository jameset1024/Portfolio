import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { faGithub, faLinkedinIn, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Experience } from "@app/data/experience";
import ExperienceDrawer from "@app/components/interactives/experience_drawer";
import { StaticImage}  from "gatsby-plugin-image";
import Button from "@app/components/elements/button";
import Expertise from "@app/components/interactives/expertise";
import {SEO} from "@app/components/layout/head";
import {graphql} from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <div className={'about-page'}>
      <div className={'banner-wrap'} role={'banner'}>
        <div className={'banner-text'}>
          About
        </div>
      </div>
      <section className={'about-info'}>
        <div className={'about-inner'}>
          <div>
            <h2>Charlotte Resident, Pittsburgh Made</h2>
            <p>Hello and thank you for visiting my website. My name is Erik and I'm a full-stack software engineer currently residing in Charlotte, NC. I've worked as an engineer since 2013, starting off as a freelancer until I made it to may current position with Nearby Creative.</p>
            <p>When I'm not working on a project, you'll find me cooking from recipes from Pinterest, working out at the YMCA, or playing video games.</p>

            <Button src={'https://erik-portfolio.s3.amazonaws.com/ET_Resume.pdf'} width={'250px'} target={'_black'}>Download My Resume</Button>
          </div>
          <div>
            <div className={'headshot-wrapper'}>
              <StaticImage
                style={{objectPosition: "center center"}}
                src={'https://erik-portfolio.s3.amazonaws.com/B11A9094.jpeg'}
                alt={'Erik Thomas Headshot'} />
            </div>
          </div>
        </div>

        <AnimatePresence>
          <motion.div
            className={'about-contact'}
            initial={{
              opacity: 0,
              translateY: '100px',
              translateX: '-50%'
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              translateX: '-50%'
            }}
            amount={'all'}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={'text'}>
              <strong>Follow Me:</strong>
            </div>
            <div className={'socials'}>
              <a href={'https://github.com/jameset1024'} target={'_blank'}>
                <FontAwesomeIcon icon={faGithub} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://www.linkedin.com/in/erikjamesthomas/'} target={'_blank'}>
                <FontAwesomeIcon icon={faLinkedinIn} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://twitter.com/jameset1024/'} target={'_blank'}>
                <FontAwesomeIcon icon={faTwitter} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://www.pinterest.com/jameset1024/recipes/'} target={'_blank'}>
                <FontAwesomeIcon icon={faPinterest} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://www.instagram.com/jameset1024'} target={'_blank'}>
                <FontAwesomeIcon icon={faInstagram} color={'#ffffff'} size={'lg'} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className={'about-experience'}>
        <h2>Work Experience</h2>
        <p>Here are some the positions that I've held over the years that have helped me become the engineer I am today.</p>

        <div className={'experience-wrap'}>
          <ExperienceDrawer data={Experience} />
        </div>
      </section>

      <section className={'about-expertise'}>
        <Expertise />
      </section>
    </div>
  )
}

export default AboutPage

export const Head: HeadFC = ({data, location}) => {
  return (
    <SEO>
      <link rel={'canonical'} href={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
      <title>About | Erik James Thomas - Senior Software Engineer</title>
    </SEO>
  )
}


export const pageQuery = graphql`
  query MyQuery {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`;
