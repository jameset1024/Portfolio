import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram, faLinkedinIn, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

const Footer = () => {
  const [date] = useState<Date>(new Date());
  return (
    <footer className={'siteFooter'}>
        <div className={'wrapper'}>
          <div className={'iconWrapper'}>
            <div>
              <a href={'https://github.com/jameset1024'} target={'_blank'}>
                <FontAwesomeIcon icon={faGithub} color={'#000'} size={'lg'} />
              </a>
              <a href={'https://www.linkedin.com/in/erikjamesthomas/'} target={'_blank'}>
                <FontAwesomeIcon icon={faLinkedinIn} color={'#000'} size={'lg'} />
              </a>
              <a href={'https://twitter.com/jameset1024/'} target={'_blank'}>
                <FontAwesomeIcon icon={faTwitter} color={'#000'} size={'lg'} />
              </a>
              <a href={'https://www.pinterest.com/jameset1024/recipes/'} target={'_blank'}>
                <FontAwesomeIcon icon={faPinterest} color={'#000'} size={'lg'} />
              </a>
              <a href={'https://www.instagram.com/jameset1024'} target={'_blank'}>
                <FontAwesomeIcon icon={faInstagram} color={'#000'} size={'lg'} />
              </a>
            </div>
            <div>
              <span>@ {date.getFullYear()} Erik James Thomas | <a href={'mailto:erik@nearbycreative.com'}>erik@nearbycreative.com</a></span>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer;
