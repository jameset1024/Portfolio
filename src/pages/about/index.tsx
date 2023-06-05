import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Experience } from "@app/data/experience";
import ExperienceDrawer from "@app/components/interactives/experience_drawer";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <div className={'about-page'}>
      <div className={'banner-wrap'} role={'banner'}>
        <div className={'banner-text'}>
          About
        </div>
      </div>
      <section className={'about-header'}>
        <div className={'about-inner'}>
          <div>
            <h2>Charlotte Resident, Pittsburgh Made</h2>
            <p>Hello and thank you for visiting my website. My name is Erik and I'm a full-stack software engineer currently residing in Charlotte, NC. I've worked as an engineer since 2013, starting off as a freelancer until I made it to may current position with Nearby Creative.</p>
            <p>When I'm not working on a project, you'll find me cooking from recipes from Pinterest, working out at the YMCA, or playing video games.</p>
          </div>
          <div>
            <div className={'headshot-wrapper'}>
              <img src={'https://erik-portfolio.s3.amazonaws.com/B11A9094.jpeg'} alt={'Erik Thomas Headshot'} />
            </div>
          </div>
        </div>

        <div className={'about-contact'}>
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
        </div>
      </section>

      <section className={'about-experience'}>
        <h2>Work Experience</h2>

        <div className={'experience-wrap'}>
          <ExperienceDrawer data={Experience} />
        </div>
      </section>
    </div>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About | Erik James Thomas - Senior Software Engineer</title>
